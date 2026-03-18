<script setup lang="ts">
import type { LoanInput, CalculationResult } from '~/types/loan'
import { useCalculator } from '~/composables/useCalculator'

useHead({
  title: 'Kalkylator för samla lån — Beräkna din besparing vid lånekonsolidering | Trygga.com',
  meta: [
    {
      name: 'description',
      content:
        'Beräkna hur mycket du kan spara varje månad genom att samla dina lån. Fyll i dina befintliga lån med belopp, ränta och månadskostnad — kalkylatorn visar din besparing direkt. Gratis verktyg från Trygga.com.',
    },
    {
      property: 'og:title',
      content: 'Kalkylator för samla lån — Beräkna din besparing vid lånekonsolidering',
    },
    {
      property: 'og:description',
      content:
        'Fyll i dina befintliga lån och se hur mycket du sparar på lånekonsolidering. Gratis kalkylator baserad på data från SCB och Finansinspektionen.',
    },
    { property: 'og:url', content: 'https://sparkalkylatorn.trygga.com/kalkylator' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Kalkylator — Beräkna din besparing på att samla lån',
    },
    {
      name: 'twitter:description',
      content: 'Gratis kalkylator för lånekonsolidering. Se hur mycket du kan spara varje månad.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://sparkalkylatorn.trygga.com/kalkylator' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Hem',
            item: 'https://sparkalkylatorn.trygga.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Kalkylator för samla lån',
            item: 'https://sparkalkylatorn.trygga.com/kalkylator',
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hur beräknar kalkylatorn min besparing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kalkylatorn summerar dina nuvarande månadsbetalningar och beräknar vad ett samlingslån med genomsnittlig marknadsränta skulle kosta. Skillnaden är din potentiella besparing per månad. Beräkningen baseras på data från SCB, Finansinspektionen och Riksbanken.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan jag spara mitt resultat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja! Efter beräkning kan du dela ditt resultat via en unik länk, kopiera den till urklipp eller dela direkt på Facebook, Twitter/X och LinkedIn.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hur många lån kan jag lägga in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Du kan lägga in upp till 5 lån i kalkylatorn. Det täcker de flesta hushålls situation — det svenska genomsnittet är 2,8 lån per hushåll.',
            },
          },
        ],
      }),
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
    <header class="mx-auto max-w-[1120px] px-4 pt-8 sm:px-6 sm:pt-10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="nordic-label hover:text-[#acc8e6] transition-colors">← Sparkalkylatorn</NuxtLink>
        <p class="nordic-label" style="font-size: 11px; color: #506580">SCB · FI · Riksbanken</p>
      </div>
      <div class="mt-3 h-px w-full" style="background-color: #183052" />
    </header>

    <!-- FORM VIEW -->
    <div v-if="!showResults" class="mx-auto max-w-[1120px] px-4 pt-8 pb-20 sm:px-6 sm:pt-10">
      <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl" style="color: #f0f5fa">
        Beräkna din besparing — samla lån och jämför räntor
      </h1>
      <p class="mt-2 text-sm sm:text-base" style="color: #7890a8">
        Fyll i uppgifterna för varje lån du har idag. Kalkylatorn för lånekonsolidering beräknar din månads- och totalbesparing direkt baserat på dina verkliga siffror.
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
        class="mt-4 w-full rounded-xl border-2 border-dashed py-4 text-sm font-medium transition-colors min-h-[52px]"
        style="border-color: #243a5c; color: #7890a8"
        :class="{ 'hover:border-[#3870a5] hover:text-[#acc8e6]': loans.length < 5 }"
        @click="addLoan"
      >
        + Lägg till ett till lån ({{ loans.length }}/5)
      </button>

      <!-- Calculate button -->
      <div class="mt-6 sm:mt-8">
        <button
          :disabled="!isValid"
          class="btn-growth w-full py-4 text-base sm:text-lg disabled:opacity-40 disabled:cursor-not-allowed min-h-[56px]"
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
    <div v-else class="mx-auto max-w-[1120px] px-4 pt-8 pb-20 sm:px-6 sm:pt-10">
      <button
        class="mb-6 text-sm font-medium transition-colors min-h-[44px] flex items-center"
        style="color: #7890a8"
        @click="goBack"
      >
        ← Ändra dina lån
      </button>

      <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <!-- Left: Loan summary cards -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xl sm:text-2xl font-bold" style="color: #f0f5fa">Dina nuvarande lån</h2>
          <div
            v-for="(loan, i) in result!.loans"
            :key="i"
            class="nordic-card p-4 sm:p-5"
          >
            <p class="nordic-label mb-2">Lån {{ String(i + 1).padStart(2, '0') }}</p>
            <div class="h-px w-full mb-3" style="background-color: #243a5c" />
            <div class="grid grid-cols-3 gap-2 sm:gap-3">
              <div>
                <p class="nordic-label" style="font-size: 10px">Belopp</p>
                <p class="font-bold text-sm sm:text-base leading-tight mt-1" style="color: #f0f5fa">{{ loan.amount.toLocaleString('sv-SE') }} <span class="text-xs font-normal" style="color: #7890a8">kr</span></p>
              </div>
              <div>
                <p class="nordic-label" style="font-size: 10px">Ränta</p>
                <p class="font-bold text-sm sm:text-base leading-tight mt-1" style="color: #acc8e6">{{ loan.interestRate }}%</p>
              </div>
              <div>
                <p class="nordic-label" style="font-size: 10px">Mån.kostnad</p>
                <p class="font-bold text-sm sm:text-base leading-tight mt-1" style="color: #f0f5fa">{{ loan.monthlyPayment.toLocaleString('sv-SE') }} <span class="text-xs font-normal" style="color: #7890a8">kr</span></p>
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
          class="btn-growth px-8 py-4 text-base w-full sm:w-auto disabled:opacity-50 min-h-[52px]"
          @click="shareResult"
        >
          {{ saving ? 'Sparar...' : 'Dela ditt resultat →' }}
        </button>
        <div v-if="shareUrl" class="w-full flex flex-col gap-1 rounded-lg px-4 py-3 sm:flex-row sm:items-center sm:gap-3" style="background-color: #12243e">
          <p class="text-sm font-medium shrink-0" style="color: #4ade80">Länk kopierad!</p>
          <a :href="shareUrl" class="text-xs underline break-all" style="color: #7890a8">{{ shareUrl }}</a>
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
      <div class="mx-auto max-w-[1120px] px-4 py-8 sm:px-6">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <NuxtLink to="/" class="text-xl font-bold" style="color: #f0f5fa" aria-label="Tillbaka till startsidan för Sparkalkylatorn">trygga.com</NuxtLink>
            <p class="mt-1 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
              Sparkalkylatorn — beräkna din besparing vid samla lån och lånekonsolidering
            </p>
          </div>
          <nav class="flex flex-wrap gap-4" aria-label="Sidonavigering">
            <NuxtLink to="/" class="text-xs" style="color: #506580">Hem</NuxtLink>
            <NuxtLink to="/kalkylator" class="text-xs" style="color: #506580">Kalkylator</NuxtLink>
            <a href="https://trygga.com" target="_blank" rel="noopener noreferrer" class="text-xs" style="color: #506580">Jämför räntor</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>
