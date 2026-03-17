export interface LoanInput {
  id: number
  amount: number        // Loan amount in SEK
  interestRate: number  // Annual interest rate (%)
  monthlyPayment: number // Current monthly payment (SEK)
}

export interface CalculationResult {
  id: string
  loans: LoanInput[]
  totalDebt: number
  currentMonthlyCost: number
  currentTotalInterest: number
  consolidatedRate: number
  consolidatedMonthly: number
  monthlySavings: number
  totalSavings: number
  loanTermMonths: number
  comparisonData: ComparisonData
  createdAt: string
}

export interface ComparisonData {
  avgHouseholdDebt: number
  avgInterestRate: number
  avgNumLoans: number
  policyRate: number
  sources: DataSource[]
}

export interface DataSource {
  name: string
  description: string
  url: string
  retrievedAt: string
}

export interface EmailCapture {
  email: string
  resultId: string
  consentTimestamp: string
  consentText: string
}
