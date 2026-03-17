import type { ComparisonData } from '~/types/loan'

/**
 * Swedish national average data for loan comparisons.
 * Sources: SCB, Finansinspektionen, Riksbanken
 * Last updated: 2026-03-17
 */
export const swedenAverages: ComparisonData = {
  // Average household unsecured debt (blancolån + kreditkort)
  // Source: SCB - Hushållens skulder och tillgångar
  avgHouseholdDebt: 245000,

  // Average interest rate on consumer loans (blancolån)
  // Source: Finansinspektionen - Konsumentkreditrapport Q4 2025
  avgInterestRate: 9.2,

  // Average number of unsecured loans per household
  // Source: SCB + Finansinspektionen
  avgNumLoans: 2.8,

  // Riksbanken policy rate (styrränta)
  // Source: Sveriges Riksbank, mars 2026
  policyRate: 3.25,

  sources: [
    {
      name: 'Statistiska centralbyrån (SCB)',
      description: 'Hushållens skulder och tillgångar, 2025',
      url: 'https://www.scb.se',
      retrievedAt: '2026-03-17',
    },
    {
      name: 'Finansinspektionen',
      description: 'Den svenska konsumentkreditmarknaden, Q4 2025',
      url: 'https://www.fi.se',
      retrievedAt: '2026-03-17',
    },
    {
      name: 'Sveriges Riksbank',
      description: 'Styrränta och referensränta, mars 2026',
      url: 'https://www.riksbank.se',
      retrievedAt: '2026-03-17',
    },
  ],
}
