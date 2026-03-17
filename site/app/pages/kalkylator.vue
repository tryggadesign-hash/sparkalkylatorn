<script setup lang="ts">
import type { LoanInput, CalculationResult } from '~/types/loan'
import { useCalculator } from '~/composables/useCalculator'

useHead({
  title: 'Kalkylator — Sparkalkylatorn',
  meta: [
    {
      name: 'description',
      content: 'Räkna ut din besparing genom att samla dina lån. Lägg in dina nuvarande lån och se hur mycket du kan spara.',
    },
  ],
})

const { calculate } = useCalculator()

const loans = ref<LoanInput[]>([
  { id: 1, amount: 0, interestRate: 0, monthlyPayment: 0 },
])

const result = ref<CalculationResult | null>(null)
const showResults = ref(false)

let nextId = 2

function addLoan() {
  if (loans.value.length >= 5) return
  loans.value.push({ id: nextId++, amount: 0, interestRate: 0, monthlyPayment: 0 })
}

function removeLoan(index: number) {
  if (loans.value.length <= 1) return
  loans.value.splice(index, 1)
}

function updateLoan(index: number, updated: LoanInput) {
  loans.value[index] = updated
}

const isValid = computed(() => {
  return loans.value.some(l => l.amount > 0 && l.interestRate > 0 && l.monthlyPayment > 0)
})

function doCalculate() {
  if (!isValid.value) return
  result.value = calculate(loans.value)
  showResults.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goBack() {
  showResults.value = false
}

const shareUrl = ref('')
const saving = ref(false)

async function shareResult() {
  if (!result.value) return
  saving.value = true
  try {
    const { id } = await $fetch<{ id: string }>('/api/results', {
      method: 'POST',
      body: result.value,
    })
    shareUrl.value = `${window.location.origin}/resultat/${id}`
    await navigator.clipboard.writeText(shareUrl.value)
  } catch (e) {
    console.error('Failed to save result', e)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="min-h-screen" style="background: linear-gradient(180deg, #0c1426 0%, #0f1a30 50%, #111e34 100%)">

    <!-- Top bar -->
    <header class="mx-auto max-w-[1120px] px-6 pt-10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="nordic-label hover:text-[#acc8e6] transition-colors">← Sparkalkylatorn</NuxtLink>
        <p class="nordic-label" style="font-size: 11px; color: #506580">SCB · FI · Riksbanken</p>
      </div>
      <div class="mt-3 h-px w-full" style="background-color: #183052" />
    </header>

    <!-- FORM VIEW -->
    <div v-if="!showResults" class="mx-auto max-w-[1120px] px-6 pt-10 pb-20">
      <h1 class="text-3xl sm:text-4xl font-bold" style="color: #f0f5fa">
        Lägg till dina lån
      </h1>
      <p class="mt-2 text-base" style="color: #7890a8">
        Fyll i uppgifterna för varje lån du har idag. Kalkylatorn beräknar din besparing direkt.
      </p>

      <div class="mt-3 flex items-baseline gap-3">
        <p class="nordic-label">Beräkningsöversikt</p>
        <p class="nordic-label" style="font-size: 11px; color: #3c6190">Ref. 2026–03</p>
      </div>
      <div class="mt-2 h-px w-full" style="background-color: #183052" />

      <!-- Loan cards -->
      <div class="mt-6 flex flex-col gap-4">
        <LoanCard
          v-for="(loan, i) in loans"
          :key="loan.id"
          :loan="loan"
          :index="i"
          :can-remove="loans.length > 1"
          @update="updateLoan(i, $event)"
          @remove="removeLoan(i)"
        />
      </div>

      <!-- Add loan button -->
      <button
        v-if="loans.length < 5"
        class="mt-4 w-full rounded-xl border-2 border-dashed py-4 text-sm font-medium transition-colors"
        style="border-color: #243a5c; color: #7890a8"
        :class="{ 'hover:border-[#3870a5] hover:text-[#acc8e6]': loans.length < 5 }"
        @click="addLoan"
      >
        + Lägg till ett till lån ({{ loans.length }}/5)
      </button>

      <!-- Calculate button -->
      <div class="mt-8">
        <button
          :disabled="!isValid"
          class="btn-growth w-full py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
          @click="doCalculate"
        >
          Beräkna min besparing →
        </button>
        <p v-if="!isValid" class="mt-2 text-xs text-center" style="color: #7890a8">
          Fyll i minst ett lån med belopp, ränta och månadskostnad
        </p>
      </div>
    </div>

    <!-- RESULTS VIEW -->
    <div v-else class="mx-auto max-w-[1120px] px-6 pt-10 pb-20">
      <button
        class="mb-6 text-sm font-medium transition-colors"
        style="color: #7890a8"
        @click="goBack"
      >
        ← Ändra dina lån
      </button>

      <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <!-- Left: Loan summary cards -->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold" style="color: #f0f5fa">Dina nuvarande lån</h2>
          <div
            v-for="(loan, i) in result!.loans"
            :key="i"
            class="nordic-card p-5"
          >
            <p class="nordic-label mb-2">Lån {{ String(i + 1).padStart(2, '0') }}</p>
            <div class="h-px w-full mb-3" style="background-color: #243a5c" />
            <div class="grid grid-cols-3 gap-3">
              <div>
                <p class="nordic-label" style="font-size: 10px">Belopp</p>
                <p class="font-bold text-lg" style="color: #f0f5fa">{{ loan.amount.toLocaleString('sv-SE') }} kr</p>
              </div>
              <div>
                <p class="nordic-label" style="font-size: 10px">Ränta</p>
                <p class="font-bold text-lg" style="color: #acc8e6">{{ loan.interestRate }}%</p>
              </div>
              <div>
                <p class="nordic-label" style="font-size: 10px">Månadskostnad</p>
                <p class="font-bold text-lg" style="color: #f0f5fa">{{ loan.monthlyPayment.toLocaleString('sv-SE') }} kr</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Results panel -->
        <ResultsDisplay :result="result!" />
      </div>

      <!-- Share button -->
      <div class="mt-8 flex flex-col items-center gap-3">
        <button
          :disabled="saving"
          class="btn-growth px-8 py-3 text-base disabled:opacity-50"
          @click="shareResult"
        >
          {{ saving ? 'Sparar...' : 'Dela ditt resultat →' }}
        </button>
        <div v-if="shareUrl" class="flex items-center gap-3 rounded-lg px-4 py-2" style="background-color: #12243e">
          <p class="text-sm" style="color: #4ade80">Länk kopierad!</p>
          <a :href="shareUrl" class="text-xs underline" style="color: #7890a8">{{ shareUrl }}</a>
        </div>
      </div>

      <!-- Data sources -->
      <div class="mt-12 h-px w-full" style="background-color: #183052" />
      <div class="mt-4">
        <p class="nordic-label mb-3">Datakällor</p>
        <div class="space-y-1">
          <p
            v-for="(src, i) in result!.comparisonData.sources"
            :key="i"
            class="text-xs"
            style="color: #3c6190"
          >
            {{ String(i + 1).padStart(2, '0') }} &nbsp; {{ src.name }} — {{ src.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t" style="border-color: #183052">
      <div class="mx-auto max-w-[1120px] px-6 py-8">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <NuxtLink to="/" class="text-xl font-bold" style="color: #f0f5fa">trygga.com</NuxtLink>
          <p class="text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
            Sparkalkylatorn — ett verktyg för dig som vill ta kontroll
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
