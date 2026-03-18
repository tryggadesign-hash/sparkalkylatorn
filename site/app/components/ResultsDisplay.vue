<script setup lang="ts">
import type { CalculationResult } from '~/types/loan'

const props = defineProps<{
  result: CalculationResult
}>()

function fmt(n: number): string {
  return Math.round(n).toLocaleString('sv-SE')
}

const currentBarWidth = computed(() => {
  const max = Math.max(props.result.currentMonthlyCost, props.result.consolidatedMonthly)
  return `${(props.result.currentMonthlyCost / max) * 100}%`
})

const consolidatedBarWidth = computed(() => {
  const max = Math.max(props.result.currentMonthlyCost, props.result.consolidatedMonthly)
  return `${(props.result.consolidatedMonthly / max) * 100}%`
})
</script>

<template>
  <div class="nordic-panel p-5 sm:p-8">
    <p class="nordic-label mb-3">Ditt resultat</p>
    <div class="h-px w-full mb-6" style="background-color: #243a5c" />

    <!-- Monthly savings -->
    <p class="text-sm" style="color: #7890a8">Månadsbesparing</p>
    <p class="mt-1 text-[44px] sm:text-[56px] lg:text-[72px] font-bold leading-none" style="color: #22c55e">
      {{ fmt(result.monthlySavings) }}<span class="text-[28px] sm:text-[36px]"> kr</span>
    </p>
    <p class="mt-2 text-sm" style="color: #508c64">per månad</p>

    <!-- Total savings -->
    <div class="mt-6 h-px w-full" style="background-color: #243a5c" />
    <p class="mt-4 text-sm" style="color: #7890a8">Total besparing över löptiden ({{ Math.round(result.loanTermMonths / 12) }} år)</p>
    <p class="mt-1 text-[30px] sm:text-[36px] lg:text-[44px] font-bold leading-none" style="color: #4ade80">
      {{ fmt(result.totalSavings) }}<span class="text-[20px] sm:text-[24px]"> kr</span>
    </p>

    <!-- Comparison bars -->
    <div class="mt-6 h-px w-full" style="background-color: #243a5c" />
    <p class="nordic-label mt-4 mb-4">Kostnadsjämförelse</p>

    <div class="mb-5">
      <div class="flex items-baseline justify-between mb-1 gap-2">
        <p class="text-xs" style="color: #7890a8">Nuvarande kostnad</p>
        <span class="text-sm font-medium shrink-0" style="color: #acc8e6">{{ fmt(result.currentMonthlyCost) }} kr/mån</span>
      </div>
      <div class="w-full">
        <div
          class="h-7 rounded-md transition-all duration-700"
          :style="{ width: currentBarWidth, backgroundColor: '#acc8e6', maxWidth: '100%' }"
        />
      </div>
    </div>

    <div class="mb-5">
      <div class="flex items-baseline justify-between mb-1 gap-2">
        <p class="text-xs" style="color: #7890a8">Samlat lån ({{ result.consolidatedRate.toFixed(1) }}%)</p>
        <span class="text-sm font-medium shrink-0" style="color: #22c55e">{{ fmt(result.consolidatedMonthly) }} kr/mån</span>
      </div>
      <div class="w-full">
        <div
          class="h-7 rounded-md transition-all duration-700"
          :style="{ width: consolidatedBarWidth, backgroundColor: '#22c55e', maxWidth: '100%' }"
        />
      </div>
    </div>

    <!-- Savings badge -->
    <div class="inline-flex items-center rounded-md px-4 py-2" style="background-color: #163c2d">
      <span class="text-sm font-medium" style="color: #22c55e">↓ {{ fmt(result.monthlySavings) }} kr billigare</span>
    </div>

    <!-- Bar chart -->
    <div class="mt-6 h-px w-full" style="background-color: #243a5c" />
    <p class="nordic-label mt-4 mb-3">Visualisering</p>
    <ClientOnly>
      <SavingsChart
        :current-cost="result.currentMonthlyCost"
        :consolidated-cost="result.consolidatedMonthly"
      />
    </ClientOnly>

    <!-- National averages comparison -->
    <div class="mt-6 h-px w-full" style="background-color: #243a5c" />
    <p class="nordic-label mt-4 mb-4">Jämfört med riksgenomsnittet</p>

    <div class="grid grid-cols-1 gap-2 xs:grid-cols-3 xs:gap-3">
      <div class="rounded-lg p-3 flex xs:flex-col items-center xs:items-start justify-between xs:justify-start gap-3 xs:gap-0" style="background-color: #12243e">
        <p class="nordic-label" style="font-size: 10px">Skuld riksgenomsnitt</p>
        <div class="text-right xs:text-left">
          <p class="text-sm font-bold xs:mt-1" style="color: #f0f5fa">{{ fmt(result.comparisonData.avgHouseholdDebt) }} kr</p>
          <p class="text-xs xs:mt-1" :style="{ color: result.totalDebt <= result.comparisonData.avgHouseholdDebt ? '#22c55e' : '#efaa50' }">
            Din: {{ fmt(result.totalDebt) }} kr
          </p>
        </div>
      </div>
      <div class="rounded-lg p-3 flex xs:flex-col items-center xs:items-start justify-between xs:justify-start gap-3 xs:gap-0" style="background-color: #12243e">
        <p class="nordic-label" style="font-size: 10px">Snittränta</p>
        <div class="text-right xs:text-left">
          <p class="text-sm font-bold xs:mt-1" style="color: #f0f5fa">{{ result.comparisonData.avgInterestRate }}%</p>
          <p class="text-xs xs:mt-1" :style="{ color: result.consolidatedRate <= result.comparisonData.avgInterestRate ? '#22c55e' : '#efaa50' }">
            Din: {{ result.consolidatedRate.toFixed(1) }}%
          </p>
        </div>
      </div>
      <div class="rounded-lg p-3 flex xs:flex-col items-center xs:items-start justify-between xs:justify-start gap-3 xs:gap-0" style="background-color: #12243e">
        <p class="nordic-label" style="font-size: 10px">Antal lån</p>
        <div class="text-right xs:text-left">
          <p class="text-sm font-bold xs:mt-1" style="color: #f0f5fa">{{ result.comparisonData.avgNumLoans }} st</p>
          <p class="text-xs xs:mt-1" :style="{ color: result.loans.length <= result.comparisonData.avgNumLoans ? '#22c55e' : '#efaa50' }">
            Dina: {{ result.loans.length }} st
          </p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-6">
      <a
        href="https://trygga.com"
        target="_blank"
        rel="noopener"
        class="btn-growth block w-full py-4 text-center text-[15px] min-h-[52px]"
      >
        Jämför lån på Trygga.com →
      </a>
    </div>
  </div>
</template>
