import type { LoanInput, CalculationResult } from '~/types/loan'
import { swedenAverages } from '~/data/swedenAverages'

/**
 * Core calculation engine for loan consolidation savings.
 * All calculations run client-side.
 */
export function useCalculator() {
  /**
   * Estimate remaining months on a loan given current payment schedule.
   * Uses: n = -ln(1 - (r * PV / PMT)) / ln(1 + r)
   * where r = monthly rate, PV = principal, PMT = monthly payment
   */
  function estimateRemainingMonths(amount: number, annualRate: number, monthlyPayment: number): number {
    const monthlyRate = annualRate / 100 / 12
    if (monthlyRate === 0) {
      return amount / monthlyPayment
    }
    const interestOnly = monthlyRate * amount
    if (monthlyPayment <= interestOnly) {
      return 120 // fallback: 10 years if payment barely covers interest
    }
    const n = -Math.log(1 - (monthlyRate * amount) / monthlyPayment) / Math.log(1 + monthlyRate)
    return Math.min(Math.ceil(n), 360) // cap at 30 years
  }

  /**
   * Calculate total interest paid over remaining term for a single loan.
   */
  function totalInterestForLoan(amount: number, annualRate: number, monthlyPayment: number): number {
    const months = estimateRemainingMonths(amount, annualRate, monthlyPayment)
    const totalPaid = monthlyPayment * months
    return Math.max(0, totalPaid - amount)
  }

  /**
   * Calculate monthly payment for a consolidated loan using amortization formula.
   * PMT = PV * r * (1+r)^n / ((1+r)^n - 1)
   */
  function calculateMonthlyPayment(principal: number, annualRate: number, termMonths: number): number {
    const monthlyRate = annualRate / 100 / 12
    if (monthlyRate === 0) {
      return principal / termMonths
    }
    const factor = Math.pow(1 + monthlyRate, termMonths)
    return principal * monthlyRate * factor / (factor - 1)
  }

  /**
   * Estimate a consolidated interest rate.
   * Uses weighted average of current rates minus a consolidation discount.
   */
  function estimateConsolidatedRate(loans: LoanInput[]): number {
    const totalAmount = loans.reduce((sum, l) => sum + l.amount, 0)
    if (totalAmount === 0) return 0
    const weightedRate = loans.reduce((sum, l) => sum + (l.interestRate * l.amount), 0) / totalAmount
    // Consolidation typically offers 1.5-2.5% lower rate
    const discount = Math.min(2.0, weightedRate * 0.2)
    return Math.max(3.0, weightedRate - discount)
  }

  /**
   * Main calculation: compare current loans vs consolidated.
   */
  function calculate(loans: LoanInput[]): CalculationResult {
    const validLoans = loans.filter(l => l.amount > 0 && l.monthlyPayment > 0)

    const totalDebt = validLoans.reduce((sum, l) => sum + l.amount, 0)
    const currentMonthlyCost = validLoans.reduce((sum, l) => sum + l.monthlyPayment, 0)

    // Estimate current total interest across all loans
    const currentTotalInterest = validLoans.reduce(
      (sum, l) => sum + totalInterestForLoan(l.amount, l.interestRate, l.monthlyPayment),
      0
    )

    // Estimate term: use the longest remaining loan term
    const loanTermMonths = Math.max(
      ...validLoans.map(l => estimateRemainingMonths(l.amount, l.interestRate, l.monthlyPayment)),
      12
    )

    // Consolidated loan
    const consolidatedRate = estimateConsolidatedRate(validLoans)
    const consolidatedMonthly = calculateMonthlyPayment(totalDebt, consolidatedRate, loanTermMonths)

    const monthlySavings = Math.max(0, currentMonthlyCost - consolidatedMonthly)
    const totalSavings = monthlySavings * loanTermMonths

    return {
      id: '',
      loans: validLoans,
      totalDebt,
      currentMonthlyCost,
      currentTotalInterest,
      consolidatedRate,
      consolidatedMonthly: Math.round(consolidatedMonthly),
      monthlySavings: Math.round(monthlySavings),
      totalSavings: Math.round(totalSavings),
      loanTermMonths: Math.round(loanTermMonths),
      comparisonData: swedenAverages,
      createdAt: new Date().toISOString(),
    }
  }

  return { calculate, estimateConsolidatedRate }
}
