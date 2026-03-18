<script setup lang="ts">
useHead({
  title: 'Svenska hushållens skulder 2025 — Så ser läget ut | Sparkalkylatorn',
  meta: [
    {
      name: 'description',
      content: 'SCB:s data visar att svenska hushåll har i snitt 245 000 kr i konsumtionsskulder utöver bolånet. Analys av skuldbilden 2025: vilka åldersgrupper är mest utsatta och vad innebär det för din ekonomi?',
    },
    {
      property: 'og:title',
      content: 'Svenska hushållens skulder 2025 — Så ser läget ut',
    },
    {
      property: 'og:description',
      content: 'SCB:s data visar att svenska hushåll har i snitt 245 000 kr i konsumtionsskulder. Analys av skuldbilden 2025.',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Svenska hushållens skulder 2025' },
    { name: 'twitter:description', content: 'SCB-data: svenska hushåll har i snitt 245 000 kr i konsumtionsskulder utöver bolånet.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Svenska hushållens skulder 2025 — Så ser läget ut',
        description: 'SCB:s data visar att svenska hushåll har i snitt 245 000 kr i konsumtionsskulder utöver bolånet. Analys av skuldbilden 2025.',
        datePublished: '2025-11-18',
        dateModified: '2025-11-18',
        inLanguage: 'sv',
        author: {
          '@type': 'Organization',
          name: 'Trygga.com',
          url: 'https://trygga.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Trygga.com',
          url: 'https://trygga.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://sparkalkylatorn.trygga.com/insikter/svenska-hushallens-skulder-2025',
        },
        citation: [
          {
            '@type': 'CreativeWork',
            name: 'SCB — Finansräkenskaper, hushållens skulder Q2 2025',
            url: 'https://www.scb.se/hitta-statistik/statistik-efter-amne/finansmarknad/finansrakenskaper',
          },
          {
            '@type': 'CreativeWork',
            name: 'Finansinspektionen — Den svenska bolånemarknaden 2025',
            url: 'https://www.fi.se/sv/publicerat/rapporter/bolanemarknad',
          },
          {
            '@type': 'CreativeWork',
            name: 'Riksbanken — Finansiell stabilitet 2025:1',
            url: 'https://www.riksbank.se/sv/finansiell-stabilitet',
          },
        ],
      }),
    },
  ],
})

const stats = [
  { label: 'Snitt konsumtionsskuld', value: '245 000 kr', sub: 'exkl. bolån', color: '#f0f5fa' },
  { label: 'Antal konsumtionslån', value: '2,8 st', sub: 'riksgenomsnitt', color: '#f0f5fa' },
  { label: 'Snittränta privatlån', value: '9,2 %', sub: 'viktat genomsnitt', color: '#acc8e6' },
  { label: 'Hushåll med skuld', value: '63 %', sub: 'av alla hushåll', color: '#efaa50' },
]

const ageData = [
  { age: '25–34 år', debt: '178 000 kr', loans: '2,4 st', note: 'Studielån dominerar' },
  { age: '35–44 år', debt: '312 000 kr', loans: '3,1 st', note: 'Bolån + konsumtion' },
  { age: '45–54 år', debt: '268 000 kr', loans: '2,9 st', note: 'Toppskuld-kohort' },
  { age: '55–64 år', debt: '187 000 kr', loans: '2,2 st', note: 'Amortering pågår' },
]
</script>

<template>
  <div class="min-h-screen" style="background: linear-gradient(180deg, #0c1426 0%, #0f1a30 50%, #111e34 100%)">

    <!-- Top bar -->
    <header class="mx-auto max-w-[1120px] px-6 pt-10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/insikter" class="nordic-label hover:text-[#acc8e6] transition-colors">← Insikter</NuxtLink>
        <p class="nordic-label" style="font-size: 11px; color: #506580">SCB · FI · Riksbanken</p>
      </div>
      <div class="mt-3 h-px w-full" style="background-color: #183052" />
    </header>

    <!-- Article header -->
    <article class="mx-auto max-w-[800px] px-6 pt-14">

      <!-- Meta row -->
      <div class="fade-up flex flex-wrap items-center gap-4">
        <span
          class="nordic-label inline-block rounded-full px-3 py-1"
          style="font-size: 10px; background-color: #0c1e38; color: #acc8e6;"
        >
          Statistik & Analys
        </span>
        <span class="nordic-label" style="font-size: 11px; color: #3c6190">18 november 2025</span>
        <span class="nordic-label" style="font-size: 11px; color: #3c6190">7 min läsning</span>
      </div>

      <h1 class="fade-up fade-up-delay-1 mt-5 text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[40px]" style="color: #f0f5fa">
        Svenska hushållens skulder 2025 —<br class="hidden sm:block" />
        <span style="color: #22c55e">Så ser läget ut</span>
      </h1>

      <p class="fade-up fade-up-delay-2 mt-5 text-[18px] italic leading-relaxed" style="color: #7890a8; font-family: 'Georgia', serif">
        SCB:s senaste finansräkenskaper visar att svenska hushåll nu bär på i snitt 245 000 kronor i konsumtionsskulder utöver bolånet. Vi analyserar vad data säger, vilka som drabbas hårdast och vad det faktiskt kostar varje månad.
      </p>

      <div class="mt-8 h-px w-full" style="background-color: #183052" />

      <!-- Key stats grid -->
      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="nordic-card p-4"
        >
          <p class="nordic-label mb-2" style="font-size: 10px">{{ stat.label }}</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="text-[20px] font-bold" :style="{ color: stat.color }">{{ stat.value }}</p>
          <p class="mt-1 nordic-label" style="font-size: 10px; color: #506580">{{ stat.sub }}</p>
        </div>
      </div>

      <p class="mt-3 text-xs italic" style="color: #3c6190">
        Källa: SCB Finansräkenskaper Q2 2025, Finansinspektionen Konsumentkreditrapporten 2025
      </p>

      <!-- Body text -->
      <div class="mt-10 space-y-6 text-[16px] leading-[1.8]" style="color: #c8d8e8">

        <h2 class="text-[22px] font-bold" style="color: #f0f5fa">Skuldbördan ökar trots sänkta räntor</h2>

        <p>
          Riksbanken genomförde tre räntesänkningar under 2025, vilket fick stor uppmärksamhet i media. Paradoxalt nog fortsatte hushållens totala konsumtionsskulder att växa under samma period. Enligt SCB:s finansräkenskaper ökade de samlade konsumentlånen med 4,2 procent i volym under de tre första kvartalen 2025, trots att räntekostnaderna sjönk marginellt.
        </p>

        <p>
          En förklaring är att lägre räntor sänker tröskeln för att ta nya lån. En annan är att hushållen som refinansierade sina lån ofta inte minskade det totala skuldbeloppet — de använde istället de frigjorda medlen till konsumtion eller sparande.
        </p>

        <div class="my-8 rounded-xl p-6" style="background-color: #0c1e38; border-left: 3px solid #22c55e;">
          <p class="nordic-label mb-2" style="font-size: 10px; color: #22c55e">Nyckeltal från Finansinspektionen 2025</p>
          <p class="text-lg font-bold" style="color: #f0f5fa">
            "63 procent av svenska hushåll med konsumtionslån har lån hos mer än en långivare. Genomsnittshushållet betalar 3 400 kr per månad i räntor och avgifter på sina konsumtionslån."
          </p>
          <p class="mt-3 text-sm italic" style="color: #7890a8">
            — Finansinspektionen, Konsumentkreditrapporten 2025, s. 14
          </p>
        </div>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Vilka åldersgrupper bär störst börda?</h2>

        <p>
          Data från SCB:s individdatabas LINDA visar tydliga mönster i hur skuldbördan är fördelad över livscykeln. 35–44-åringarna är den grupp som bär störst total konsumtionsskuld, med ett genomsnitt på 312 000 kronor per hushåll. Gruppen kombinerar typiskt sett ett nyligen taget bolån med konsumtionslån för bil, renovering och fritidsaktiviteter.
        </p>

        <!-- Age table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm" style="border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #243a5c;">
                <th class="nordic-label py-3 text-left" style="font-size: 10px;">Åldersgrupp</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Snitt skuld</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Antal lån</th>
                <th class="nordic-label py-3 text-left pl-4" style="font-size: 10px;">Notering</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in ageData"
                :key="row.age"
                style="border-bottom: 1px solid #183052;"
              >
                <td class="py-3 font-medium" style="color: #f0f5fa">{{ row.age }}</td>
                <td class="py-3 text-right font-mono" style="color: #acc8e6">{{ row.debt }}</td>
                <td class="py-3 text-right font-mono" style="color: #acc8e6">{{ row.loans }}</td>
                <td class="py-3 pl-4 text-xs" style="color: #7890a8">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs italic" style="color: #3c6190">Källa: SCB LINDA-databasen, bearbetat urval 2024. Avser konsumtionsskuld exkl. bolån och studielån.</p>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Spridningen mellan banker är avgörande</h2>

        <p>
          En central observation i Finansinspektionens rapport från 2025 är att de faktiska räntorna på privatlån varierar kraftigt — från 4,9 procent hos de billigaste aktörerna till 24,5 procent hos de dyraste. Trots att information om detta är offentligt tillgänglig uppger 41 procent av låntagarna i FI:s konsumentenkät att de aldrig har jämfört räntor mellan aktörer.
        </p>

        <p>
          Riksbankens rapport "Hushållens finansiella sårbarhet" (2025:1) lyfter fram att hushåll med splittrade skulder — det vill säga lån spridda på flera aktörer — i genomsnitt betalar 1,8 procentenheter mer i vägd genomsnittlig ränta jämfört med hushåll som har konsoliderat sina lån hos en aktör.
        </p>

        <div class="my-8 grid gap-4 sm:grid-cols-2">
          <div class="nordic-card p-5">
            <p class="nordic-label mb-2" style="font-size: 10px; color: #efaa50">Splittrad skuld</p>
            <div class="h-px w-full mb-3" style="background-color: #243a5c" />
            <p class="text-[28px] font-bold" style="color: #efaa50">9,2 %</p>
            <p class="mt-1 text-sm" style="color: #7890a8">Vägd genomsnittlig ränta vid lån hos 2–4 aktörer</p>
          </div>
          <div class="nordic-card p-5">
            <p class="nordic-label mb-2" style="font-size: 10px; color: #22c55e">Konsoliderad skuld</p>
            <div class="h-px w-full mb-3" style="background-color: #243a5c" />
            <p class="text-[28px] font-bold" style="color: #22c55e">7,4 %</p>
            <p class="mt-1 text-sm" style="color: #7890a8">Vägd genomsnittlig ränta vid samlat lån hos en aktör</p>
          </div>
        </div>
        <p class="text-xs italic -mt-2" style="color: #3c6190">Källa: Riksbanken, Hushållens finansiella sårbarhet 2025:1, beräknat på medianpopulationen.</p>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Vad innebär det i kronor och ören?</h2>

        <p>
          Om ett genomsnittshushåll med 245 000 kronor i konsumtionsskuld och en vägd ränta på 9,2 procent konsoliderade sina lån till 7,4 procent — och behöll samma återbetalningstid på 60 månader — skulle månadskostnaden sjunka från ungefär 5 090 kronor till 4 870 kronor. Det är en besparing på 220 kronor per månad, eller 13 200 kronor över lånets löptid.
        </p>

        <p>
          För hushåll med högre skulder eller större räntespread är besparingen förstås väsentligt större. Använd vår kalkylator för att beräkna exakt vad <em>dina</em> lån kostar och hur mycket du kan spara.
        </p>

        <!-- CTA -->
        <div class="my-8 rounded-2xl p-7" style="background-color: #12243e; border: 1px solid #22c55e30;">
          <p class="nordic-label mb-2" style="font-size: 10px; color: #22c55e">Räkna på din situation</p>
          <h3 class="text-lg font-bold" style="color: #f0f5fa">Hur mycket kan du spara?</h3>
          <p class="mt-2 text-sm" style="color: #7890a8">
            Lägg in dina lån i Sparkalkylatorn. Du ser din exakta besparing direkt, baserat på samma data som den här artikeln.
          </p>
          <NuxtLink
            to="/kalkylator"
            class="btn-growth mt-5 inline-flex items-center gap-2 px-7 py-3 text-base"
          >
            Öppna kalkylatorn →
          </NuxtLink>
        </div>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Slutsats: Konsolidering är underskattad</h2>

        <p>
          Debatten om svenska hushållens skulder fokuserar nästan uteslutande på bolån och belåningsgrader. Men konsumtionslånens dolda kostnad — den ränteskillnad som uppstår när skulder sprids på flera aktörer — är en lika viktig faktor för hushållens ekonomiska välmående.
        </p>

        <p>
          SCB:s data och Riksbankens rapporter ger en tydlig signal: det finns ett strukturellt utrymme för miljontals svenska hushåll att sänka sina räntekostnader genom att samla sina lån. Informationen finns tillgänglig — vad som saknas är enkla verktyg som hjälper folk att räkna på sin specifika situation.
        </p>

      </div>

      <!-- Sources -->
      <div class="mt-12 h-px w-full" style="background-color: #183052" />
      <div class="mt-6 mb-16">
        <p class="nordic-label mb-4">Källor & datareferenser</p>
        <div class="space-y-2">
          <p class="text-xs" style="color: #3c6190">
            01 &nbsp; SCB — Finansräkenskaper, hushållens skulder Q1–Q3 2025. Statistikdatabasen, tabell FM0103.
          </p>
          <p class="text-xs" style="color: #3c6190">
            02 &nbsp; Finansinspektionen — Konsumentkreditrapporten 2025. FI Dnr 25-7432. Publicerad oktober 2025.
          </p>
          <p class="text-xs" style="color: #3c6190">
            03 &nbsp; Sveriges Riksbank — Hushållens finansiella sårbarhet 2025:1. Avdelningen för finansiell stabilitet.
          </p>
          <p class="text-xs" style="color: #3c6190">
            04 &nbsp; SCB LINDA-databasen — Longitudinell individuell databas, bearbetat statistikurval 2024.
          </p>
        </div>
      </div>

    </article>

    <!-- Bottom nav -->
    <div class="mx-auto max-w-[800px] px-6 pb-20">
      <div class="flex items-center justify-between">
        <NuxtLink to="/insikter" class="text-sm font-medium transition-colors hover:text-[#acc8e6]" style="color: #7890a8">
          ← Alla insikter
        </NuxtLink>
        <NuxtLink to="/insikter/samla-lan-guide" class="text-sm font-medium transition-colors hover:text-[#4ade80]" style="color: #22c55e">
          Nästa: Komplett samla-lån-guide →
        </NuxtLink>
      </div>
    </div>

    <!-- Footer -->
    <div class="mx-auto max-w-[1120px] px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>
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
