<script setup lang="ts">
useHead({
  title: 'Komplett guide: Så samlar du dina lån och sparar pengar | Sparkalkylatorn',
  meta: [
    {
      name: 'description',
      content: 'Steg-för-steg-guide till att samla dina lån. Lär dig när det lönar sig, vad du ska jämföra och hur mycket ett genomsnittshushåll sparar. Baserad på data från Finansinspektionen och Riksbanken.',
    },
    {
      property: 'og:title',
      content: 'Komplett guide: Så samlar du dina lån och sparar pengar',
    },
    {
      property: 'og:description',
      content: 'Steg-för-steg: samla dina lån, sänk räntan och spara tusentals kronor per år. Baserad på svensk myndighetdata.',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Komplett guide: Samla dina lån' },
    { name: 'twitter:description', content: 'Steg-för-steg-guide till att samla dina lån och sänka din räntekostnad.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Komplett guide: Så samlar du dina lån och sparar pengar',
        description: 'Steg-för-steg-guide till att samla dina lån. Baserad på data från Finansinspektionen och Riksbanken.',
        datePublished: '2025-12-03',
        dateModified: '2025-12-03',
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
          '@id': 'https://sparkalkylatorn.trygga.com/insikter/samla-lan-guide',
        },
        citation: [
          {
            '@type': 'CreativeWork',
            name: 'Finansinspektionen — Konsumentkreditrapporten 2025',
            url: 'https://www.fi.se',
          },
          {
            '@type': 'CreativeWork',
            name: 'Riksbanken — Penningpolitisk rapport 2025:3',
            url: 'https://www.riksbank.se',
          },
        ],
      }),
    },
  ],
})

const steps = [
  {
    number: '01',
    title: 'Kartlägg alla dina lån',
    body: 'Samla alla låneavtal och hitta nuvarande saldo, ränta (effektiv årsränta), månadsbetalning och eventuell löptid. Kolla Mina sidor hos varje bank. Glöm inte kreditkortskulder — de har ofta 19–24 % ränta.',
    tip: 'Tips: Begär ett skriftligt utdrag från varje långivare. Det är din rätt enligt konsumentkreditlagen.',
  },
  {
    number: '02',
    title: 'Beräkna din nuvarande totalkostnad',
    body: 'Räkna ut summan av alla dina månadskostnader, inklusive avgifter. Multiplicera med 12 för att se den årliga räntekostnaden. Det här är det tal du ska slå.',
    tip: 'Använd Sparkalkylatorn för att göra den här beräkningen automatiskt.',
  },
  {
    number: '03',
    title: 'Hitta det bästa samlingslånet',
    body: 'Jämför effektiv årsränta (EAR), inte bara nominell ränta. Kontrollera uppläggningsavgifter och aviavgifter. Tänk på att löptiden påverkar månadskostnaden — ett lägre månadsbelopp kan dölja en högre totalkostnad.',
    tip: 'FI-tillstånd är ett krav för alla seriösa kreditgivare i Sverige. Kontrollera på fi.se.',
  },
  {
    number: '04',
    title: 'Beräkna den faktiska besparingen',
    body: 'Jämför: (nuvarande totala månadskostnad) minus (ny månadskostnad). Multiplicera skillnaden med återstående löptid i månader för att se totalsumman. Räkna även in eventuella avslutningsavgifter för befintliga lån.',
    tip: 'En besparing på 500 kr/mån under 5 år är 30 000 kr. Det är värt att räkna noga.',
  },
  {
    number: '05',
    title: 'Ansök och avsluta gamla lån',
    body: 'Ansök om samlingslånet och se till att det beviljas innan du avslutar gamla lån. När pengarna är utbetalda, betala av och avsluta varje gammalt lån skriftligen. Begär bekräftelse och skultdfrihetsintyg.',
    tip: 'Avsluta kreditkortskontona helt om du inte behöver dem — annars räknas de fortfarande in i din kreditvärdighet.',
  },
]

const myths = [
  {
    myth: 'Samlingslån förlänger alltid skulden',
    fact: 'Inte om du väljer rätt löptid. Väljer du samma återbetalningstid som dina befintliga lån, betalar du av skulden lika snabbt — men billigare.',
  },
  {
    myth: 'Det skadar alltid kreditbetyget',
    fact: 'En kreditförfrågan syns i UC i 12 månader. Men att ha färre aktiva lån och en lägre skuldsättning förbättrar ofta kreditprofilen på sikt.',
  },
  {
    myth: 'Bankerna erbjuder alltid det bästa priset',
    fact: 'Finansinspektionens data visar att priserna varierar med upp till 19,6 procentenheter för identiska låneprofiler. Jämförelse lönar sig alltid.',
  },
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
          style="font-size: 10px; background-color: #0c1e38; color: #22c55e;"
        >
          Guide
        </span>
        <span class="nordic-label" style="font-size: 11px; color: #3c6190">3 december 2025</span>
        <span class="nordic-label" style="font-size: 11px; color: #3c6190">10 min läsning</span>
      </div>

      <h1 class="fade-up fade-up-delay-1 mt-5 text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[40px]" style="color: #f0f5fa">
        Komplett guide: Så samlar du<br class="hidden sm:block" />
        <span style="color: #22c55e">dina lån och sparar pengar</span>
      </h1>

      <p class="fade-up fade-up-delay-2 mt-5 text-[18px] italic leading-relaxed" style="color: #7890a8; font-family: 'Georgia', serif">
        Att ha lån spridda på flera aktörer är det vanligaste och dyraste misstaget i privatekonomi. Den här guiden ger dig alla verktyg för att räkna, jämföra och konsolidera — utan att fastna i fällfångorna.
      </p>

      <div class="mt-8 h-px w-full" style="background-color: #183052" />

      <!-- Quick fact box -->
      <div class="mt-8 rounded-xl p-6" style="background-color: #0c1e38; border-left: 3px solid #22c55e;">
        <p class="nordic-label mb-3" style="font-size: 10px; color: #22c55e">Snabbfakta — Varför lönar det sig?</p>
        <div class="grid gap-4 sm:grid-cols-3">
          <div>
            <p class="text-[22px] font-bold" style="color: #f0f5fa">1,8 pp</p>
            <p class="text-xs mt-1" style="color: #7890a8">Lägre genomsnittsränta vid konsolidering (Riksbanken 2025)</p>
          </div>
          <div>
            <p class="text-[22px] font-bold" style="color: #22c55e">220 kr/mån</p>
            <p class="text-xs mt-1" style="color: #7890a8">Snittbesparing för ett genomsnittshushåll (245 000 kr skuld)</p>
          </div>
          <div>
            <p class="text-[22px] font-bold" style="color: #acc8e6">41 %</p>
            <p class="text-xs mt-1" style="color: #7890a8">Av låntagarna har aldrig jämfört räntor (FI konsumentenkät 2025)</p>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="mt-10 space-y-6 text-[16px] leading-[1.8]" style="color: #c8d8e8">

        <h2 class="text-[22px] font-bold" style="color: #f0f5fa">Vad är ett samlingslån?</h2>

        <p>
          Ett samlingslån — ibland kallat konsolideringslån — innebär att du tar ett nytt lån för att betala av flera befintliga lån. Målet är att ersätta en blandning av lån med olika räntor, löptider och amorteringsplaner med ett enda lån på bättre villkor.
        </p>

        <p>
          Konceptet är enkelt men detaljerna avgör om det faktiskt lönar sig. Lägre ränta är den uppenbara fördelen, men det finns fler dimensioner: administrativa avgifter, förtidsbetalningskostnader, löptid och hur det påverkar din kreditprofil.
        </p>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">Steg-för-steg: Genomför din konsolidering</h2>

        <!-- Steps -->
        <div class="space-y-4">
          <div
            v-for="step in steps"
            :key="step.number"
            class="nordic-card p-6"
          >
            <div class="flex items-start gap-4">
              <span
                class="nordic-label shrink-0 rounded-lg px-3 py-1 text-center"
                style="font-size: 14px; background-color: #0c1e38; color: #22c55e; min-width: 48px;"
              >
                {{ step.number }}
              </span>
              <div class="flex-1">
                <h3 class="text-base font-bold" style="color: #f0f5fa">{{ step.title }}</h3>
                <div class="mt-2 h-px w-full" style="background-color: #243a5c" />
                <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">{{ step.body }}</p>
                <div class="mt-3 rounded-lg p-3" style="background-color: #0c1e38;">
                  <p class="text-xs" style="color: #acc8e6">{{ step.tip }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-[22px] font-bold pt-4" style="color: #f0f5fa">Vad du faktiskt ska jämföra</h2>

        <p>
          Många konsumenter fastnar i att jämföra nominell ränta, men det är ett misstag. Den effektiva årsräntan (EAR) inkluderar alla avgifter och är det enda jämförelsemått som är meningsfullt. Sedan 2014 är alla kreditgivare skyldiga att uppge EAR enligt EU-direktivet om konsumentkrediter (CCD).
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-sm" style="border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #243a5c;">
                <th class="nordic-label py-3 text-left" style="font-size: 10px;">Vad du jämför</th>
                <th class="nordic-label py-3 text-left" style="font-size: 10px;">Varför det spelar roll</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #183052;">
                <td class="py-3 font-medium" style="color: #f0f5fa">Effektiv årsränta (EAR)</td>
                <td class="py-3 text-sm" style="color: #7890a8">Det enda måttet som inkluderar alla avgifter. Kräv detta, inte nominell ränta.</td>
              </tr>
              <tr style="border-bottom: 1px solid #183052;">
                <td class="py-3 font-medium" style="color: #f0f5fa">Uppläggningsavgift</td>
                <td class="py-3 text-sm" style="color: #7890a8">Engångskostnad, ofta 0–2 500 kr. Kan äta upp besparingen om lånet amorteras snabbt.</td>
              </tr>
              <tr style="border-bottom: 1px solid #183052;">
                <td class="py-3 font-medium" style="color: #f0f5fa">Aviavgift</td>
                <td class="py-3 text-sm" style="color: #7890a8">Löpande avgift, 0–50 kr/månad. Välj e-faktura eller autogiro för att minimera.</td>
              </tr>
              <tr style="border-bottom: 1px solid #183052;">
                <td class="py-3 font-medium" style="color: #f0f5fa">Förtidsbetalningsavgift</td>
                <td class="py-3 text-sm" style="color: #7890a8">Kostnaden för att avsluta gamla lån i förtid. Vanligast vid bundna räntor.</td>
              </tr>
              <tr>
                <td class="py-3 font-medium" style="color: #f0f5fa">Total återbetalning</td>
                <td class="py-3 text-sm" style="color: #7890a8">Summa kapital + räntor + avgifter under hela löptiden. Det ultimata jämförelsemåttet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- CTA mid-article -->
        <div class="my-6 rounded-2xl p-7" style="background-color: #12243e; border: 1px solid #22c55e30;">
          <p class="nordic-label mb-2" style="font-size: 10px; color: #22c55e">Räkna på din situation</p>
          <h3 class="text-lg font-bold" style="color: #f0f5fa">Beräkna din exakta besparing</h3>
          <p class="mt-2 text-sm" style="color: #7890a8">
            Lägg in dina nuvarande lån i Sparkalkylatorn. Du ser direkt hur mycket du kan spara — med jämförelsedata från SCB och FI.
          </p>
          <NuxtLink
            to="/kalkylator"
            class="btn-growth mt-5 inline-flex items-center gap-2 px-7 py-3 text-base"
          >
            Öppna kalkylatorn →
          </NuxtLink>
        </div>

        <h2 class="text-[22px] font-bold pt-2" style="color: #f0f5fa">När lönar det sig <em>inte</em>?</h2>

        <p>
          Konsolidering är inte alltid rätt val. Det finns situationer där det faktiskt kostar mer:
        </p>

        <ul class="space-y-2 pl-4">
          <li class="flex items-start gap-3">
            <span style="color: #efaa50; margin-top: 2px;">▸</span>
            <span><strong style="color: #f0f5fa">Du har nästan amorterat klart.</strong> Om du har 6 månader kvar på ett lån lönar det sig sällan att refinansiera. Beräkna alltid kvarvarande räntekostnad.</span>
          </li>
          <li class="flex items-start gap-3">
            <span style="color: #efaa50; margin-top: 2px;">▸</span>
            <span><strong style="color: #f0f5fa">Förlängd löptid äter besparingen.</strong> En lägre månadsbetalning som beror på längre återbetalningstid innebär att du betalar mer totalt. Jämför alltid totalkostnad, inte månadskostnad.</span>
          </li>
          <li class="flex items-start gap-3">
            <span style="color: #efaa50; margin-top: 2px;">▸</span>
            <span><strong style="color: #f0f5fa">Avslutningsavgifter är höga.</strong> Vissa lån har förtidsbetalningsavgifter på 1–3 % av utestående saldo. Räkna med dessa i din kalkyl.</span>
          </li>
          <li class="flex items-start gap-3">
            <span style="color: #efaa50; margin-top: 2px;">▸</span>
            <span><strong style="color: #f0f5fa">Du har underliggande konsumtionsproblem.</strong> Att samla lån utan att adressera varför du tog dem kan leda till att du bygger upp nya skulder ovanpå samlingslånet.</span>
          </li>
        </ul>

        <h2 class="text-[22px] font-bold pt-4" style="color: #f0f5fa">Vanliga myter — och sanningen</h2>

        <div class="space-y-4">
          <div
            v-for="item in myths"
            :key="item.myth"
            class="rounded-xl p-5"
            style="background-color: #0c1e38;"
          >
            <div class="flex items-start gap-3">
              <span class="mt-0.5 shrink-0 text-sm" style="color: #efaa50">Myt:</span>
              <p class="text-sm font-medium" style="color: #f0f5fa">{{ item.myth }}</p>
            </div>
            <div class="mt-3 flex items-start gap-3">
              <span class="mt-0.5 shrink-0 text-sm font-bold" style="color: #22c55e">Fakta:</span>
              <p class="text-sm" style="color: #7890a8">{{ item.fact }}</p>
            </div>
          </div>
        </div>

        <h2 class="text-[22px] font-bold pt-4" style="color: #f0f5fa">Sammanfattning</h2>

        <p>
          Att samla lån är ett kraftfullt verktyg för att sänka räntekostnader och förenkla ekonomin. Nyckeln är att räkna ordentligt: jämför effektiv årsränta, inkludera alla avgifter och beräkna totalkostnaden — inte bara månadskostnaden.
        </p>

        <p>
          Data från Riksbanken och Finansinspektionen visar att hushåll som konsoliderar sina lån i genomsnitt betalar 1,8 procentenheter lägre ränta. För ett genomsnittshushåll med 245 000 kronor i konsumtionsskuld innebär det tusentals kronor i besparing varje år.
        </p>

      </div>

      <!-- Sources -->
      <div class="mt-12 h-px w-full" style="background-color: #183052" />
      <div class="mt-6 mb-16">
        <p class="nordic-label mb-4">Källor & datareferenser</p>
        <div class="space-y-2">
          <p class="text-xs" style="color: #3c6190">
            01 &nbsp; Finansinspektionen — Konsumentkreditrapporten 2025. FI Dnr 25-7432.
          </p>
          <p class="text-xs" style="color: #3c6190">
            02 &nbsp; Sveriges Riksbank — Hushållens finansiella sårbarhet 2025:1.
          </p>
          <p class="text-xs" style="color: #3c6190">
            03 &nbsp; Europeiska kommissionen — Direktiv 2008/48/EG om konsumentkreditavtal (CCD).
          </p>
          <p class="text-xs" style="color: #3c6190">
            04 &nbsp; SCB — Finansräkenskaper, hushållens skulder Q2 2025.
          </p>
        </div>
      </div>

    </article>

    <!-- Bottom nav -->
    <div class="mx-auto max-w-[800px] px-6 pb-20">
      <div class="flex items-center justify-between">
        <NuxtLink to="/insikter/svenska-hushallens-skulder-2025" class="text-sm font-medium transition-colors hover:text-[#acc8e6]" style="color: #7890a8">
          ← Svenska hushållens skulder 2025
        </NuxtLink>
        <NuxtLink to="/insikter/ranta-jamforelse-2026" class="text-sm font-medium transition-colors hover:text-[#4ade80]" style="color: #22c55e">
          Nästa: Ränteläget 2026 →
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
