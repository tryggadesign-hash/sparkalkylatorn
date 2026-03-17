<context>
# Overview

A standalone Digital PR microsite — a **Swedish loan consolidation savings calculator** — designed to earn backlinks and media coverage for [trygga.com](https://trygga.com) from journalists, bloggers, and financial comparison sites across Sweden.

The tool lets Swedish consumers input their current loans, see how much they could save by consolidating, compare their situation against national averages, and share their results via a unique URL with auto-generated social share images.

# Target Audience

- **Primary users:** Swedish consumers with multiple loans (2–5 loans)
- **Link targets:** Journalists, personal finance bloggers, financial comparison sites, news outlets in Sweden

# Key Goals

1. Generate organic backlinks to trygga.com through a genuinely useful, data-driven tool
2. Provide shareable results that spread on social media and attract press coverage
3. Capture emails optionally for trygga.com's marketing funnel
4. Establish trygga.com as a trustworthy authority using real public data sources
</context>

<PRD>

# Technical Architecture

## Tech Stack

- **Framework:** Vue 3 + Nuxt 3 (SSR/SSG hybrid)
- **Styling:** Tailwind CSS
- **Charts:** Chart.js or D3.js for interactive visualizations
- **Language:** TypeScript
- **Hosting:** Static-friendly (Vercel, Netlify, or similar)
- **Backend (minimal):** Nuxt server routes for:
  - Saving/retrieving shareable results (simple JSON storage or SQLite)
  - Generating OG share images (server-side or edge function using Satori/sharp or similar)
  - Optional email capture endpoint
- **Data sources:** Real public data from SCB (Statistiska centralbyrån), Finansinspektionen, Riksbanken for national averages and benchmarks

## Data Model

### Loan Input
```typescript
interface LoanInput {
  amount: number        // Loan amount in SEK
  interestRate: number  // Annual interest rate (%)
  monthlyPayment: number // Current monthly payment (SEK)
}
```

### Calculation Result
```typescript
interface CalculationResult {
  id: string                    // Unique shareable ID
  loans: LoanInput[]            // User's input loans
  totalDebt: number             // Sum of all loan amounts
  currentMonthlyCost: number    // Sum of all monthly payments
  currentTotalInterest: number  // Total interest over remaining term
  consolidatedRate: number      // Estimated consolidated rate
  consolidatedMonthly: number   // New monthly payment
  monthlySavings: number        // Monthly savings
  totalSavings: number          // Total savings over loan term
  comparisonData: {             // National average comparison
    avgHouseholdDebt: number
    avgInterestRate: number
    avgNumLoans: number
  }
  createdAt: string
}
```

# User Experience — Page Structure & Flow

## Page 1: Landing Page (`/`)

- **Headline:** "Hur mycket kan du spara genom att samla dina lån?"
- Brief explanation (2–3 sentences) of what the tool does
- Prominent CTA button: "Börja räkna" (Start calculating)
- Below the fold:
  - Preview/mockup of what results look like
  - Trust signals: "Baserat på data från SCB, Finansinspektionen och Riksbanken"
  - Key stats teaser (e.g., "Svenska hushåll betalar i snitt X kr/mån i onödiga räntekostnader")
- SEO-optimized metadata and Open Graph tags
- Responsive mobile-first design

## Page 2: Calculator (`/kalkylator`)

### Step 1 — Add Loans
- User adds 1–5 current loans, each with:
  - Loan amount (kr) — number input with formatting
  - Interest rate (%) — number input
  - Monthly payment (kr) — number input
- "Lägg till ett till lån" (Add another loan) button
- Visual loan cards that can be edited or removed
- Input validation with helpful Swedish-language error messages
- Pre-filled example values as placeholders

### Step 2 — See Results
- Animated transition from input to results view
- Key metrics displayed prominently:
  - Current total monthly cost vs. estimated consolidated cost
  - Monthly savings amount (large, highlighted)
  - Total savings over the loan term
- Interactive bar chart or comparison visualization:
  - Your costs vs. consolidated costs
  - Your situation vs. Swedish national averages (SCB/FI data)
- Breakdown table showing per-loan details
- CTA: "Jämför lån på Trygga.com" linking to trygga.com
- "Dela ditt resultat" (Share your result) button → generates shareable link
- All calculations run client-side, no page reload

## Page 3: Shareable Results (`/resultat/:id`)

- Server-rendered page with the user's saved results
- Auto-generated OG image containing key numbers (monthly savings, total savings)
- Same visualization as calculator results but in a read-only view
- CTA: "Jämför lån på Trygga.com"
- Secondary CTA: "Räkna på dina egna lån" → links back to calculator
- Optional email capture: "Skicka rapporten till din mail"
- Proper meta tags for social sharing (Twitter Card, OG tags)

# Core Features

## 1. Loan Input Form
- Clean, intuitive multi-loan input with Swedish formatting (spaces as thousand separator, comma as decimal)
- Support for 1–5 loans
- Client-side validation
- Responsive design that works well on mobile

## 2. Savings Calculation Engine
- Client-side calculation comparing current total costs vs. estimated consolidated loan
- Consolidated rate estimation based on current market data / reasonable assumptions
- Calculate monthly savings and total savings over remaining term
- No server round-trip needed for calculations

## 3. National Average Comparison
- Hardcoded (or periodically updated) data from:
  - SCB: average household debt levels
  - Finansinspektionen: average interest rates on consumer loans
  - Riksbanken: policy rate for context
- Visual comparison (bar chart / infographic style) showing user vs. average
- Source citations displayed for credibility

## 4. Shareable Results
- Generate unique result ID and persist to server
- Server-side OG image generation with key savings numbers
- Clean URL structure: `/resultat/:id`
- Copy-to-clipboard share link functionality
- Social share buttons (Facebook, Twitter/X, LinkedIn)

## 5. Email Capture
- Optional, non-gating email input on results page
- Simple "Send me this report" functionality
- Stores email + result ID for trygga.com follow-up
- GDPR-compliant with consent checkbox

## 6. SEO & Digital PR Optimization
- Comprehensive meta tags on all pages
- Structured data (JSON-LD) for the tool
- Fast page loads (static generation where possible)
- Swedish-language content throughout
- Mobile-optimized for social sharing scenarios

# Development Phases

## Phase 1: MVP Core (Week 1)
- Nuxt 3 project setup with TypeScript and Tailwind
- Landing page with hero section and CTA
- Calculator page with loan input form (1–5 loans)
- Client-side calculation engine
- Results display with key savings metrics
- Basic responsive design
- Hardcoded Swedish average data for comparison
- Basic chart/visualization for results

## Phase 2: Sharing & Polish (Week 2)
- Server-side result persistence (Nuxt server routes + simple storage)
- Shareable results page (`/resultat/:id`)
- OG image generation for social sharing
- Social share buttons
- Email capture form with GDPR consent
- SEO metadata and Open Graph tags on all pages
- Structured data (JSON-LD)
- Visual polish: animations, transitions, trust signals
- Cross-browser and mobile testing
- Performance optimization

## Phase 3: Future Enhancements (Post-launch)
- A/B test different headlines and CTAs
- Add more detailed loan type selection (blancolån, billån, etc.)
- Dynamic data updates from SCB/FI APIs
- Printable PDF report generation
- More advanced visualizations (amortization timeline, etc.)
- Analytics integration for tracking conversions and shares

# Design Guidelines

- **Language:** All UI text in Swedish
- **Typography:** Clean, modern sans-serif (e.g., Inter or similar)
- **Colors:** Should complement trygga.com's branding; trustworthy blues/greens
- **Tone:** Professional but approachable, not overly financial/corporate
- **Mobile-first:** Primary sharing will happen on phones
- **Accessibility:** WCAG 2.1 AA compliance

# Constraints & Assumptions

- No user authentication needed
- The tool is free to use, no gating behind signup
- Social share images generated server-side (Satori + sharp or edge function)
- Modest traffic expectations (a few thousand visitors/day)
- Fully static-friendly with minimal backend
- Links back to trygga.com as the primary conversion CTA
- GDPR-compliant email handling

</PRD>
