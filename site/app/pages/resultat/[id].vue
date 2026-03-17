<script setup lang="ts">
import type { CalculationResult } from '~/types/loan'

const route = useRoute()
const id = route.params.id as string

const { data: result, error } = await useFetch<CalculationResult>(`/api/results/${id}`)

function fmt(n: number): string {
  return Math.round(n).toLocaleString('sv-SE')
}

useHead(() => {
  if (!result.value) return {}
  return {
    title: `Jag kan spara ${fmt(result.value.monthlySavings)} kr/mån — Sparkalkylatorn`,
    meta: [
      { property: 'og:title', content: `Jag kan spara ${fmt(result.value.monthlySavings)} kr/mån genom att samla mina lån` },
      { property: 'og:description', content: `Total besparing: ${fmt(result.value.totalSavings)} kr. Räkna ut din egen besparing på Sparkalkylatorn.` },
      { property: 'og:image', content: `/api/og/${id}.png` },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `Jag kan spara ${fmt(result.value.monthlySavings)} kr/mån` },
      { name: 'twitter:description', content: `Total besparing: ${fmt(result.value.totalSavings)} kr` },
      { name: 'twitter:image', content: `/api/og/${id}.png` },
    ],
  }
})

const copied = ref(false)
async function copyLink() {
  await navigator.clipboard.writeText(window.location.href)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

function shareOn(platform: string) {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`Jag kan spara ${fmt(result.value!.monthlySavings)} kr/mån genom att samla mina lån!`)
  const urls: Record<string, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  }
  window.open(urls[platform], '_blank', 'width=600,height=400')
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

    <!-- Error state -->
    <div v-if="error" class="mx-auto max-w-[1120px] px-6 pt-20 text-center">
      <p class="text-2xl font-bold" style="color: #f0f5fa">Resultatet hittades inte</p>
      <p class="mt-3" style="color: #7890a8">Länken kan vara felaktig eller så har resultatet tagits bort.</p>
      <NuxtLink to="/kalkylator" class="btn-growth mt-6 inline-block px-8 py-3">
        Räkna på dina egna lån →
      </NuxtLink>
    </div>

    <!-- Results -->
    <div v-else-if="result" class="mx-auto max-w-[1120px] px-6 pt-10 pb-20">

      <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <!-- Left: Summary + share -->
        <div>
          <h1 class="text-2xl font-bold mb-6" style="color: #f0f5fa">Sparresultat</h1>

          <!-- Loan summary cards -->
          <div class="flex flex-col gap-3 mb-8">
            <div
              v-for="(loan, i) in result.loans"
              :key="i"
              class="nordic-card p-5"
            >
              <p class="nordic-label mb-2">Lån {{ String(i + 1).padStart(2, '0') }}</p>
              <div class="h-px w-full mb-3" style="background-color: #243a5c" />
              <div class="grid grid-cols-3 gap-3">
                <div>
                  <p class="nordic-label" style="font-size: 10px">Belopp</p>
                  <p class="font-bold text-lg" style="color: #f0f5fa">{{ fmt(loan.amount) }} kr</p>
                </div>
                <div>
                  <p class="nordic-label" style="font-size: 10px">Ränta</p>
                  <p class="font-bold text-lg" style="color: #acc8e6">{{ loan.interestRate }}%</p>
                </div>
                <div>
                  <p class="nordic-label" style="font-size: 10px">Månadskostnad</p>
                  <p class="font-bold text-lg" style="color: #f0f5fa">{{ fmt(loan.monthlyPayment) }} kr</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Share buttons -->
          <div class="flex flex-col gap-3">
            <p class="nordic-label">Dela resultatet</p>
            <button
              class="nordic-card border px-5 py-3 text-left text-sm font-medium transition-colors hover:border-[#3c6190]"
              style="border-color: #32506e; color: #acc8e6"
              @click="copyLink"
            >
              {{ copied ? '✓ Kopierad!' : 'Kopiera länk' }}
            </button>
            <button
              class="nordic-card border px-5 py-3 text-left text-sm font-medium transition-colors hover:border-[#3c6190]"
              style="border-color: #32506e; color: #acc8e6"
              @click="shareOn('facebook')"
            >
              Facebook
            </button>
            <button
              class="nordic-card border px-5 py-3 text-left text-sm font-medium transition-colors hover:border-[#3c6190]"
              style="border-color: #32506e; color: #acc8e6"
              @click="shareOn('twitter')"
            >
              Twitter / X
            </button>
            <button
              class="nordic-card border px-5 py-3 text-left text-sm font-medium transition-colors hover:border-[#3c6190]"
              style="border-color: #32506e; color: #acc8e6"
              @click="shareOn('linkedin')"
            >
              LinkedIn
            </button>
          </div>

          <!-- Email capture -->
          <EmailCapture :result-id="id" />
        </div>

        <!-- Right: Results panel -->
        <ResultsDisplay :result="result" />
      </div>

      <!-- CTA to calculate own -->
      <div class="mt-12 text-center">
        <NuxtLink to="/kalkylator" class="btn-growth inline-block px-8 py-4 text-lg">
          Räkna på dina egna lån →
        </NuxtLink>
      </div>

      <!-- Data sources -->
      <div class="mt-12 h-px w-full" style="background-color: #183052" />
      <div class="mt-4">
        <p class="nordic-label mb-3">Datakällor</p>
        <div class="space-y-1">
          <p
            v-for="(src, i) in result.comparisonData.sources"
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
