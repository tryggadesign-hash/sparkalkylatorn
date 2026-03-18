<script setup lang="ts">
useHead({
  title: 'Ränteläget i Sverige 2026 — Vad det betyder för dina lån | Sparkalkylatorn',
  meta: [
    {
      name: 'description',
      content: 'Riksbanken sänkte styrräntan tre gånger 2025. Men bankerna har inte sänkt konsumentlåneräntorna i samma takt. Vi analyserar spreaden och vad det innebär för hushåll med privatlån och kreditkortsskulder.',
    },
    {
      property: 'og:title',
      content: 'Ränteläget i Sverige 2026 — Vad det betyder för dina lån',
    },
    {
      property: 'og:description',
      content: 'Riksbanken sänkte styrräntan men bankerna har inte följt efter på konsumentlån. Analys av spreaden 2026.',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Ränteläget i Sverige 2026' },
    { name: 'twitter:description', content: 'Riksbankens sänkningar vs bankernas konsumenträntor — spreaden som kostar hushållen miljarder.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Ränteläget i Sverige 2026 — Vad det betyder för dina lån',
        description: 'Riksbanken sänkte styrräntan tre gånger 2025. Analys av hur bankernas konsumenträntor har förändrats i jämförelse.',
        datePublished: '2026-01-14',
        dateModified: '2026-01-14',
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
          '@id': 'https://sparkalkylatorn.trygga.com/insikter/ranta-jamforelse-2026',
        },
        citation: [
          {
            '@type': 'CreativeWork',
            name: 'Riksbanken — Penningpolitisk rapport november 2025',
            url: 'https://www.riksbank.se/sv/penningpolitik/penningpolitiska-rapporter',
          },
          {
            '@type': 'CreativeWork',
            name: 'SCB — Finansmarknadsstatistik, november 2025',
            url: 'https://www.scb.se/hitta-statistik/statistik-efter-amne/finansmarknad',
          },
          {
            '@type': 'CreativeWork',
            name: 'Finansinspektionen — Konsumentkreditrapporten 2025',
            url: 'https://www.fi.se',
          },
        ],
      }),
    },
  ],
})

const rateTimeline = [
  { date: 'Jan 2024', policy: '4,00 %', consumer: '9,6 %', spread: '5,6 pp' },
  { date: 'Maj 2024', policy: '3,75 %', consumer: '9,5 %', spread: '5,75 pp' },
  { date: 'Sep 2024', policy: '3,25 %', consumer: '9,4 %', spread: '6,15 pp' },
  { date: 'Jan 2025', policy: '2,75 %', consumer: '9,3 %', spread: '6,55 pp' },
  { date: 'Maj 2025', policy: '2,25 %', consumer: '9,2 %', spread: '6,95 pp' },
  { date: 'Nov 2025', policy: '2,00 %', consumer: '9,1 %', spread: '7,1 pp' },
  { date: 'Jan 2026', policy: '2,00 %', consumer: '9,0 %', spread: '7,0 pp' },
]

const loanTypeRates = [
  { type: 'Privatlån — storbank', min: '6,9 %', max: '14,5 %', snitt: '9,8 %' },
  { type: 'Privatlån — nischbank', min: '4,9 %', max: '12,9 %', snitt: '7,6 %' },
  { type: 'Kreditkort', min: '17,9 %', max: '24,5 %', snitt: '21,3 %' },
  { type: 'Avbetalning/delbetalning', min: '19,8 %', max: '29,9 %', snitt: '23,7 %' },
  { type: 'Samlingslån (konsolidering)', min: '5,9 %', max: '13,9 %', snitt: '8,1 %' },
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
          style="font-size: 10px; background-color: #0c1e38; color: #efaa50;"
        >
          Ränteanalys
        </span>
        <span class="nordic-label" style="font-size: 11px; color: #3c6190">14 januari 2026</span>
        <span class="nordic-label" style="font-size: 11px; color: #3c6190">8 min läsning</span>
      </div>

      <h1 class="fade-up fade-up-delay-1 mt-5 text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[40px]" style="color: #f0f5fa">
        Ränteläget i Sverige 2026 —<br class="hidden sm:block" />
        <span style="color: #22c55e">Vad det betyder för dina lån</span>
      </h1>

      <p class="fade-up fade-up-delay-2 mt-5 text-[18px] italic leading-relaxed" style="color: #7890a8; font-family: 'Georgia', serif">
        Riksbanken har sänkt styrräntan med 2 procentenheter sedan toppen 2024. Men snittpriset på privatlån har bara sjunkit med 0,6 procentenheter under samma period. Vi reder ut vad spreaden beror på och vad det kostar svenska hushåll.
      </p>

      <div class="mt-8 h-px w-full" style="background-color: #183052" />

      <!-- Key stats -->
      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div class="nordic-card p-5">
          <p class="nordic-label mb-2" style="font-size: 10px">Styrränta jan 2026</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="text-[24px] font-bold" style="color: #f0f5fa">2,00 %</p>
          <p class="mt-1 text-xs" style="color: #22c55e">−2,0 pp sedan topp</p>
        </div>
        <div class="nordic-card p-5">
          <p class="nordic-label mb-2" style="font-size: 10px">Snitt privatlån jan 2026</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="text-[24px] font-bold" style="color: #acc8e6">9,0 %</p>
          <p class="mt-1 text-xs" style="color: #efaa50">−0,6 pp sedan topp</p>
        </div>
        <div class="nordic-card p-5 col-span-2 sm:col-span-1">
          <p class="nordic-label mb-2" style="font-size: 10px">Spread (skillnad)</p>
          <div class="h-px w-full mb-3" style="background-color: #243a5c" />
          <p class="text-[24px] font-bold" style="color: #efaa50">7,0 pp</p>
          <p class="mt-1 text-xs" style="color: #efaa50">Historisk högspread</p>
        </div>
      </div>
      <p class="mt-3 text-xs italic" style="color: #3c6190">Källa: Riksbanken penningpolitiska beslut 2024–2025, SCB Finansmarknadsstatistik november 2025.</p>

      <!-- Body -->
      <div class="mt-10 space-y-6 text-[16px] leading-[1.8]" style="color: #c8d8e8">

        <h2 class="text-[22px] font-bold" style="color: #f0f5fa">Riksbankens historiska vändning</h2>

        <p>
          Efter att ha höjt styrräntan i en av de snabbaste takterna i modern historia — från 0 procent i januari 2022 till 4,0 procent i maj 2023 — påbörjade Riksbanken sin räntesänkningscykel i maj 2024. I november 2025 landade styrräntan på 2,0 procent, vilket är en sänkning med totalt 2 procentenheter på 18 månader.
        </p>

        <p>
          Mediabilderna av räntesänkningarna var entusiastiska. "Nu sänks din ränta" löd rubrikerna. Men för den stora gruppen hushåll med privatlån och kreditkortsskulder — snarare än bolån — har sänkningarna haft marginell effekt på månadskostnaden.
        </p>

        <div class="my-8 rounded-xl p-6" style="background-color: #0c1e38; border-left: 3px solid #efaa50;">
          <p class="nordic-label mb-3" style="font-size: 10px; color: #efaa50">Det vi ser i SCB:s data</p>
          <p class="text-lg font-bold" style="color: #f0f5fa">
            "Sedan Riksbankens räntecykel inleddes har bolåneräntorna sjunkit med i genomsnitt 1,7 procentenheter. Räntorna på icke-säkerställda konsumentlån har under samma period sjunkit med 0,6 procentenheter."
          </p>
          <p class="mt-3 text-sm italic" style="color: #7890a8">
            — SCB Finansmarknadsstatistik, beräkning på månadsdata maj 2024–november 2025
          </p>
        </div>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Spreadutvecklingen — det dolda problemet</h2>

        <p>
          Spreaden mellan Riksbankens styrränta och genomsnittsräntan på privatlån har faktiskt ökat under räntesänkningscykeln. Från 5,6 procentenheter i januari 2024 till 7,0 procentenheter i januari 2026. Det innebär att bankernas marginaler på konsumentlån har vuxit, inte krympt.
        </p>

        <!-- Timeline table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm" style="border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #243a5c;">
                <th class="nordic-label py-3 text-left" style="font-size: 10px;">Period</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Styrränta</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Snitt privatlån</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Spread</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in rateTimeline"
                :key="row.date"
                :style="{
                  borderBottom: '1px solid #183052',
                  backgroundColor: i === rateTimeline.length - 1 ? '#0c1e38' : 'transparent'
                }"
              >
                <td class="py-3 font-medium" :style="{ color: i === rateTimeline.length - 1 ? '#f0f5fa' : '#c8d8e8' }">{{ row.date }}</td>
                <td class="py-3 text-right font-mono" style="color: #acc8e6">{{ row.policy }}</td>
                <td class="py-3 text-right font-mono" style="color: #acc8e6">{{ row.consumer }}</td>
                <td
                  class="py-3 text-right font-mono font-bold"
                  :style="{ color: i >= 4 ? '#efaa50' : '#7890a8' }"
                >
                  {{ row.spread }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs italic" style="color: #3c6190">Källa: Riksbanken penningpolitiska beslut, SCB Finansmarknadsstatistik. Snitt privatlån = viktat genomsnitt effektiv årsränta för icke-säkerställda konsumentlån.</p>

        <h2 class="text-[22px] font-bold pt-4" style="color: #f0f5fa">Varför följer inte konsumentlånen med?</h2>

        <p>
          Det finns flera strukturella förklaringar till varför privatlåneräntor rör sig trögare nedåt än bolåneräntor:
        </p>

        <div class="space-y-3">
          <div class="rounded-xl p-5" style="background-color: #0c1e38;">
            <h3 class="text-base font-bold" style="color: #f0f5fa">Ingen säkerhet ger högre riskpremie</h3>
            <p class="mt-2 text-sm" style="color: #7890a8">
              Privatlån är icke-säkerställda. Banken tar en kreditrisk utan något tillgångsskydd. När räntorna sjunker generellt minskar inte kreditrisken på konsumentlån i samma takt som för bolån med fastighet som säkerhet.
            </p>
          </div>
          <div class="rounded-xl p-5" style="background-color: #0c1e38;">
            <h3 class="text-base font-bold" style="color: #f0f5fa">Låg prissensitivitet bland konsumenter</h3>
            <p class="mt-2 text-sm" style="color: #7890a8">
              FI:s konsumentenkät 2025 visar att 41 procent av privatlåntagarna inte jämfört priser. Utan aktiv prispress från konsumentsidan minskar bankernas incitament att sänka marginalerna.
            </p>
          </div>
          <div class="rounded-xl p-5" style="background-color: #0c1e38;">
            <h3 class="text-base font-bold" style="color: #f0f5fa">Finansieringskostnad är inte bara styrränta</h3>
            <p class="mt-2 text-sm" style="color: #7890a8">
              Bankernas finansieringskostnad för konsumentkrediter beror på en mix av inlåningskostnader, obligationsmarknaden och interbanklåning. Styrräntan är en av flera variabler, och inte alltid den viktigaste.
            </p>
          </div>
        </div>

        <h2 class="text-[22px] font-bold pt-4" style="color: #f0f5fa">Aktuella ränteintervall per lånetyp</h2>

        <p>
          Nedan en sammanställning av faktiska effektiva årsräntor på den svenska marknaden i januari 2026, baserad på publicerade erbjudanden från aktiva kreditgivare med FI-tillstånd.
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-sm" style="border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #243a5c;">
                <th class="nordic-label py-3 text-left" style="font-size: 10px;">Lånetyp</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Lägsta EAR</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Högsta EAR</th>
                <th class="nordic-label py-3 text-right" style="font-size: 10px;">Snitt EAR</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in loanTypeRates"
                :key="row.type"
                style="border-bottom: 1px solid #183052;"
              >
                <td class="py-3 font-medium" style="color: #f0f5fa">{{ row.type }}</td>
                <td class="py-3 text-right font-mono" style="color: #22c55e">{{ row.min }}</td>
                <td class="py-3 text-right font-mono" style="color: #efaa50">{{ row.max }}</td>
                <td class="py-3 text-right font-mono font-bold" style="color: #acc8e6">{{ row.snitt }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs italic" style="color: #3c6190">
          EAR = Effektiv årsränta inklusive alla avgifter. Data baserad på marknadsöversikt januari 2026 av publicerade erbjudanden. Räntan beror på kreditprofil och lånebelopp.
        </p>

        <h2 class="text-[22px] font-bold pt-4" style="color: #f0f5fa">Vad prognoserna säger om 2026</h2>

        <p>
          I sin penningpolitiska rapport från november 2025 signalerade Riksbanken en mer avvaktande hållning framåt. Med styrräntan på 2,0 procent och inflationen som rör sig mot målet på 2 procent ser banken begränsat utrymme för ytterligare sänkningar under 2026. Prognosen antyder en oförändrad ränta under hela 2026.
        </p>

        <p>
          Det innebär att hushåll som räknar med ytterligare automatiska räntesänkningar på sina konsumtionslån sannolikt kommer att bli besvikna. Den enda säkra vägen att sänka räntekostnaden är att aktivt jämföra och refinansiera.
        </p>

        <!-- Main CTA -->
        <div class="my-8 rounded-2xl p-7" style="background-color: #12243e; border: 1px solid #22c55e30;">
          <p class="nordic-label mb-2" style="font-size: 10px; color: #22c55e">Ta kontroll nu — räntorna sänks inte automatiskt</p>
          <h3 class="text-xl font-bold" style="color: #f0f5fa">Beräkna vad dina lån kostar</h3>
          <p class="mt-2 text-sm" style="color: #7890a8">
            Lägg in dina nuvarande lån i Sparkalkylatorn. Du ser direkt om du betalar för högt — och hur mycket du kan spara genom att samla och jämföra.
          </p>
          <NuxtLink
            to="/kalkylator"
            class="btn-growth mt-5 inline-flex items-center gap-2 px-7 py-3 text-base"
          >
            Öppna kalkylatorn →
          </NuxtLink>
        </div>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Slutsats: Ta inte ränteläget för givet</h2>

        <p>
          Den stora berättelsen om räntesänkningarna 2025 handlar om bolån. Men för de 1,8 miljoner svenska hushåll som har privatlån och konsumentlån är bilden mer komplex. Spreaden mot styrräntan har ökat, och bankernas marginaler är på historiska toppar.
        </p>

        <p>
          I det läget är aktiv jämförelse och refinansiering det enda effektiva verktyget för att sänka din räntekostnad. Väntande på att styrräntesänkningar automatiskt ska nå fram till konsumentlåneräntorna är — baserat på de senaste 18 månadernas data — en kostsam strategi.
        </p>

      </div>

      <!-- Sources -->
      <div class="mt-12 h-px w-full" style="background-color: #183052" />
      <div class="mt-6 mb-16">
        <p class="nordic-label mb-4">Källor & datareferenser</p>
        <div class="space-y-2">
          <p class="text-xs" style="color: #3c6190">
            01 &nbsp; Sveriges Riksbank — Penningpolitisk rapport november 2025. ISBN 978-91-89789-36-4.
          </p>
          <p class="text-xs" style="color: #3c6190">
            02 &nbsp; SCB — Finansmarknadsstatistik, november 2025. Statistikdatabasen, tabell FM5001.
          </p>
          <p class="text-xs" style="color: #3c6190">
            03 &nbsp; Finansinspektionen — Konsumentkreditrapporten 2025. FI Dnr 25-7432.
          </p>
          <p class="text-xs" style="color: #3c6190">
            04 &nbsp; Riksbanken — Penningpolitiska beslut 2024–2025, sammanfattande tidslinje.
          </p>
        </div>
      </div>

    </article>

    <!-- Bottom nav -->
    <div class="mx-auto max-w-[800px] px-6 pb-20">
      <div class="flex items-center justify-between">
        <NuxtLink to="/insikter/samla-lan-guide" class="text-sm font-medium transition-colors hover:text-[#acc8e6]" style="color: #7890a8">
          ← Samla lån-guiden
        </NuxtLink>
        <NuxtLink to="/insikter" class="text-sm font-medium transition-colors hover:text-[#4ade80]" style="color: #22c55e">
          Alla insikter →
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
