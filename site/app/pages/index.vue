<script setup lang="ts">
useHead({
  title: 'Sparkalkylatorn — Hur mycket kan du spara genom att samla dina lån?',
  meta: [
    {
      property: 'og:title',
      content: 'Sparkalkylatorn — Hur mycket kan du spara genom att samla dina lån?',
    },
    {
      property: 'og:description',
      content: 'Räkna ut hur mycket du kan spara genom att samla dina lån. Baserat på verklig data från SCB, Finansinspektionen och Riksbanken.',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sparkalkylatorn — Samla dina lån och spara' },
    { name: 'twitter:description', content: 'Räkna ut hur mycket du kan spara varje månad.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Sparkalkylatorn',
        description: 'Räkna ut hur mycket du kan spara genom att samla dina lån. Baserat på data från SCB, Finansinspektionen och Riksbanken.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
        inLanguage: 'sv',
        creator: {
          '@type': 'Organization',
          name: 'Trygga.com',
          url: 'https://trygga.com',
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen" style="background: linear-gradient(180deg, #0c1426 0%, #0f1a30 50%, #111e34 100%)">

    <!-- Top bar with datum line -->
    <header class="mx-auto max-w-[1120px] px-6 pt-10">
      <div class="flex items-center justify-between">
        <p class="nordic-label">Sparkalkylatorn</p>
        <p class="nordic-label" style="font-size: 11px; color: #506580">SCB · FI · Riksbanken</p>
      </div>
      <div class="mt-3 h-px w-full" style="background-color: #183052" />
    </header>

    <!-- Hero Section -->
    <section class="mx-auto max-w-[1120px] px-6 pt-16 pb-12">
      <h1 class="fade-up max-w-[720px] text-[42px] font-bold leading-[1.15] tracking-tight sm:text-[56px] lg:text-[64px]">
        <span style="color: #f0f5fa">Hur mycket kan du</span><br />
        <span style="color: #f0f5fa">spara genom att</span><br />
        <span style="color: #22c55e">samla dina lån?</span>
      </h1>

      <p class="fade-up fade-up-delay-1 mt-6 max-w-[540px] text-[17px] italic leading-relaxed" style="color: #7890a8; font-family: 'Georgia', serif">
        En kalkylator baserad på verklig data från svenska myndigheter
      </p>

      <!-- CTA Button -->
      <div class="fade-up fade-up-delay-2 mt-8">
        <NuxtLink
          to="/kalkylator"
          class="btn-growth inline-flex items-center gap-2 px-8 py-4 text-[17px]"
        >
          Börja räkna
        </NuxtLink>
        <span class="ml-4 text-lg" style="color: #7890a8">→</span>
      </div>
    </section>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Swedish Averages Section -->
    <section class="mx-auto max-w-[1120px] px-6 pt-6 pb-4">
      <p class="nordic-label">Svenska genomsnitt</p>
      <p class="mt-2 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
        Jämförelse mot riksgenomsnittet baserat på SCB &amp; Finansinspektionen
      </p>

      <div class="mt-6 grid gap-5 sm:grid-cols-3">
        <!-- Stat 1: Household debt -->
        <div class="nordic-card p-6">
          <p class="nordic-label mb-2" style="font-size: 11px">Hushållsskuld</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="nordic-number text-[28px]">245 000 <span class="text-sm font-normal" style="color: #7890a8">kr</span></p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Riksgenomsnitt</p>
          <p class="mt-3 text-sm font-medium" style="color: #22c55e">Din: 245 000 kr</p>
        </div>

        <!-- Stat 2: Average rate -->
        <div class="nordic-card p-6">
          <p class="nordic-label mb-2" style="font-size: 11px">Snittränta</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="nordic-number text-[28px]">9.2<span class="text-lg">%</span></p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Riksgenomsnitt</p>
          <p class="mt-3 text-sm font-medium" style="color: #22c55e">Din: 9.1%</p>
        </div>

        <!-- Stat 3: Number of loans -->
        <div class="nordic-card p-6">
          <p class="nordic-label mb-2" style="font-size: 11px">Antal lån</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="nordic-number text-[28px]">2.8 <span class="text-sm font-normal" style="color: #7890a8">st</span></p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Riksgenomsnitt</p>
          <div class="mt-3 flex items-center gap-2">
            <p class="text-sm font-medium" style="color: #efaa50">Dina: 3 st</p>
            <div class="h-4 w-4 rounded-full" style="background-color: #efaa50" />
          </div>
        </div>
      </div>
    </section>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-6 pt-8">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-6 pt-8">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Data Sources (compact) -->
    <section class="mx-auto max-w-[1120px] px-6 pt-4 pb-2">
      <div class="flex flex-wrap items-center gap-x-6 gap-y-1">
        <p class="nordic-label" style="font-size: 10px">Datakällor:</p>
        <p class="text-xs" style="color: #3c6190">SCB</p>
        <p class="text-xs" style="color: #3c6190">Finansinspektionen</p>
        <p class="text-xs" style="color: #3c6190">Sveriges Riksbank</p>
      </div>
    </section>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-6 pt-4">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Footer -->
    <footer class="mx-auto max-w-[1120px] px-6 pt-6 pb-14">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="text-3xl font-bold" style="color: #f0f5fa">trygga.com</p>
          <p class="mt-2 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
            Sparkalkylatorn — ett verktyg för dig som vill ta kontroll
          </p>
        </div>
        <div class="text-right">
          <p class="nordic-label" style="color: #3870a5">Nordic Clarity</p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Design Philosophy v1.0</p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">2026</p>
        </div>
      </div>
    </footer>

  </div>
</template>
