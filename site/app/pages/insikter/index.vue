<script setup lang="ts">
useHead({
  title: 'Insikter om privatekonomi och lån — Sparkalkylatorn',
  meta: [
    {
      name: 'description',
      content: 'Djupgående analyser om svenska hushållens skulder, ränteläget och hur du samlar dina lån. Baserat på data från SCB, Riksbanken och Finansinspektionen.',
    },
    {
      property: 'og:title',
      content: 'Insikter om privatekonomi och lån — Sparkalkylatorn',
    },
    {
      property: 'og:description',
      content: 'Djupgående analyser om svenska hushållens skulder, ränteläget och hur du samlar dina lån.',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Insikter — Sparkalkylatorn',
        description: 'Analyser och guider om privatekonomi, skulder och lånekonsolidering för svenska hushåll.',
        url: 'https://sparkalkylatorn.trygga.com/insikter',
        inLanguage: 'sv',
        publisher: {
          '@type': 'Organization',
          name: 'Trygga.com',
          url: 'https://trygga.com',
        },
      }),
    },
  ],
})

const articles = [
  {
    slug: 'svenska-hushallens-skulder-2025',
    title: 'Svenska hushållens skulder 2025 — Så ser läget ut',
    excerpt: 'SCB:s senaste data visar att svenska hushåll i snitt har 2,8 konsumtionslån utöver bolånet. Vi analyserar skuldbilden, vilka åldersgrupper som är mest utsatta och vad det innebär för din privatekonomi.',
    date: '2025-11-18',
    readTime: '7 min',
    category: 'Statistik & Analys',
    categoryColor: '#acc8e6',
  },
  {
    slug: 'samla-lan-guide',
    title: 'Komplett guide: Så samlar du dina lån och sparar pengar',
    excerpt: 'Att ha flera lån med olika räntor och förfallodagar är dyrt och stressigt. Den här guiden går igenom steg för steg hur du konsoliderar dina lån, vad du ska titta på och hur mycket du faktiskt kan spara.',
    date: '2025-12-03',
    readTime: '10 min',
    category: 'Guide',
    categoryColor: '#22c55e',
  },
  {
    slug: 'ranta-jamforelse-2026',
    title: 'Ränteläget i Sverige 2026 — Vad det betyder för dina lån',
    excerpt: 'Riksbanken sänkte styrräntan tre gånger under 2025. Men har bankerna verkligen sänkt sina konsumenträntor i samma takt? Vi jämför policyrän­tan mot faktiska snitträntor på privatlån och kreditkort.',
    date: '2026-01-14',
    readTime: '8 min',
    category: 'Ränteanalys',
    categoryColor: '#efaa50',
  },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })
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

    <!-- Hero -->
    <section class="mx-auto max-w-[1120px] px-6 pt-14 pb-10">
      <p class="nordic-label fade-up" style="color: #3870a5">Insikter</p>
      <h1 class="fade-up fade-up-delay-1 mt-3 text-[38px] font-bold leading-[1.15] tracking-tight sm:text-[52px]">
        <span style="color: #f0f5fa">Privatekonomi,</span><br />
        <span style="color: #22c55e">fakta och analys</span>
      </h1>
      <p class="fade-up fade-up-delay-2 mt-5 max-w-[560px] text-[17px] leading-relaxed italic" style="color: #7890a8; font-family: 'Georgia', serif">
        Djupgående artiklar om svenska hushållens skulder, räntor och hur du kan ta kontroll över din ekonomi. Baserat på offentlig data.
      </p>
    </section>

    <!-- Divider -->
    <div class="mx-auto max-w-[1120px] px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Article grid -->
    <section class="mx-auto max-w-[1120px] px-6 pt-10 pb-20">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(article, i) in articles"
          :key="article.slug"
          :to="`/insikter/${article.slug}`"
          class="nordic-card group flex flex-col p-6 transition-all duration-200 hover:translate-y-[-2px]"
          style="text-decoration: none; border: 1px solid #183052;"
          :class="`fade-up fade-up-delay-${i + 1}`"
        >
          <!-- Category badge -->
          <div class="mb-4 flex items-center justify-between">
            <span
              class="nordic-label inline-block rounded-full px-3 py-1"
              style="font-size: 10px; background-color: #0c1e38;"
              :style="{ color: article.categoryColor }"
            >
              {{ article.category }}
            </span>
            <span class="nordic-label" style="font-size: 10px; color: #3c6190">{{ article.readTime }}</span>
          </div>

          <!-- Title -->
          <h2
            class="text-[17px] font-bold leading-snug transition-colors duration-200 group-hover:text-[#4ade80]"
            style="color: #f0f5fa"
          >
            {{ article.title }}
          </h2>

          <!-- Divider -->
          <div class="my-4 h-px w-full" style="background-color: #243a5c" />

          <!-- Excerpt -->
          <p class="flex-1 text-sm leading-relaxed" style="color: #7890a8">
            {{ article.excerpt }}
          </p>

          <!-- Footer row -->
          <div class="mt-5 flex items-center justify-between">
            <p class="text-xs" style="color: #3c6190">{{ formatDate(article.date) }}</p>
            <span class="text-sm font-medium transition-colors duration-200 group-hover:text-[#4ade80]" style="color: #22c55e">
              Läs artikel →
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- CTA panel -->
      <div class="mt-12 rounded-2xl p-8 sm:p-10" style="background-color: #12243e; border: 1px solid #183052;">
        <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p class="nordic-label mb-2" style="color: #22c55e">Redo att räkna?</p>
            <h3 class="text-xl font-bold" style="color: #f0f5fa">Hur mycket kan du spara?</h3>
            <p class="mt-1 text-sm" style="color: #7890a8">Använd kalkylatorn för att se din faktiska besparing på under 2 minuter.</p>
          </div>
          <NuxtLink
            to="/kalkylator"
            class="btn-growth inline-flex shrink-0 items-center gap-2 px-7 py-3 text-base"
          >
            Öppna kalkylatorn →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Data sources -->
    <div class="mx-auto max-w-[1120px] px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>
    <section class="mx-auto max-w-[1120px] px-6 pt-4 pb-2">
      <div class="flex flex-wrap items-center gap-x-6 gap-y-1">
        <p class="nordic-label" style="font-size: 10px">Datakällor:</p>
        <p class="text-xs" style="color: #3c6190">SCB</p>
        <p class="text-xs" style="color: #3c6190">Finansinspektionen</p>
        <p class="text-xs" style="color: #3c6190">Sveriges Riksbank</p>
      </div>
    </section>
    <div class="mx-auto max-w-[1120px] px-6 pt-4">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Footer -->
    <footer class="mx-auto max-w-[1120px] px-6 pt-6 pb-14">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <NuxtLink to="/" class="text-3xl font-bold" style="color: #f0f5fa">trygga.com</NuxtLink>
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
