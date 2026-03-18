<script setup lang="ts">
useHead({
  title: 'Sparkalkylatorn — Räkna ut hur mycket du sparar på att samla lån | Trygga.com',
  meta: [
    {
      name: 'description',
      content:
        'Gratis kalkylator för lånekonsolidering. Se hur mycket du kan spara varje månad genom att samla dina lån till ett — baserat på data från SCB, Finansinspektionen och Riksbanken.',
    },
    {
      property: 'og:title',
      content: 'Sparkalkylatorn — Hur mycket kan du spara på att samla lån?',
    },
    {
      property: 'og:description',
      content:
        'Räkna ut hur mycket du kan spara genom att samla dina lån. Baserat på verklig data från SCB, Finansinspektionen och Riksbanken. Gratis kalkylator från Trygga.com.',
    },
    { property: 'og:url', content: 'https://sparkalkylatorn.trygga.com/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sparkalkylatorn — Samla dina lån och spara pengar' },
    {
      name: 'twitter:description',
      content:
        'Räkna ut hur mycket du kan spara varje månad genom att samla dina lån till ett. Gratis kalkylator för lånekonsolidering.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://sparkalkylatorn.trygga.com/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Sparkalkylatorn',
        description:
          'Räkna ut hur mycket du kan spara genom att samla dina lån. Baserat på data från SCB, Finansinspektionen och Riksbanken.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
        inLanguage: 'sv',
        url: 'https://sparkalkylatorn.trygga.com/',
        creator: {
          '@type': 'Organization',
          name: 'Trygga.com',
          url: 'https://trygga.com',
        },
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
            name: 'Vad innebär det att samla lån?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Att samla lån (lånekonsolidering) innebär att du ersätter flera mindre lån — till exempel konsumtionslån, kreditkortsskulder och avbetalningar — med ett enda lån. Det nya lånet har ofta en lägre ränta, vilket minskar din totala månadskostnad och gör det enklare att hålla koll på din ekonomi.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hur mycket kan jag spara på att samla lån?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Besparingen beror på dina nuvarande räntor och det nya lånebeloppet. Genomsnittliga svenska hushåll med 2–3 smålån kan spara 500–2 000 kr per månad. Använd vår kalkylator för att beräkna din exakta besparing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vad är skillnaden mellan lånekonsolidering och skuldsanering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lånekonsolidering innebär att du tar ett nytt lån för att betala av befintliga skulder — du betalar fortfarande tillbaka hela beloppet men till bättre villkor. Skuldsanering är ett juridiskt förfarande via Kronofogden där delar av skulden kan efterskänkas för personer i allvarlig skuldkris.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hur jämför jag räntor när jag ska samla lån?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Jämför alltid den effektiva räntan (ÅRK) hos olika långivare, inte bara nominell ränta. Effektiv ränta inkluderar alla avgifter och ger en rättvisande bild av den verkliga kostnaden. Trygga.com jämför räntor från flera banker och långivare åt dig.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vilka lån kan jag samla ihop?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Du kan vanligtvis samla konsumtionslån, billån, kreditkortsskulder, avbetalningsköp och privatlån. Bolån samlas separat och ingår normalt inte i ett samlingslån.',
            },
          },
          {
            '@type': 'Question',
            name: 'Är Sparkalkylatorn gratis att använda?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, Sparkalkylatorn är helt gratis att använda. Verktyget är framtaget av Trygga.com för att hjälpa svenska hushåll att förstå potentialen i att samla sina lån. Inga dolda kostnader eller registrering krävs.',
            },
          },
        ],
      }),
    },
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
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen" style="background: linear-gradient(180deg, #0c1426 0%, #0f1a30 50%, #111e34 100%)">

    <!-- Top bar with datum line -->
    <header class="mx-auto max-w-[1120px] px-4 pt-8 sm:px-6 sm:pt-10">
      <div class="flex items-center justify-between">
        <p class="nordic-label">Sparkalkylatorn</p>
        <p class="nordic-label" style="font-size: 11px; color: #506580">SCB · FI · Riksbanken</p>
      </div>
      <div class="mt-3 h-px w-full" style="background-color: #183052" />
    </header>

    <!-- Hero Section -->
    <section class="mx-auto max-w-[1120px] px-4 pt-10 pb-10 sm:px-6 sm:pt-16 sm:pb-12" aria-label="Introduktion">
      <h1 class="fade-up text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[48px] md:text-[56px] lg:text-[64px]">
        <span style="color: #f0f5fa">Hur mycket kan du spara</span><br />
        <span style="color: #f0f5fa">genom att</span>
        <span style="color: #22c55e"> samla dina lån?</span>
      </h1>

      <p class="fade-up fade-up-delay-1 mt-5 max-w-[540px] text-base sm:text-[17px] italic leading-relaxed" style="color: #7890a8; font-family: 'Georgia', serif">
        En gratis kalkylator för lånekonsolidering — baserad på verklig data från svenska myndigheter
      </p>

      <!-- CTA Button -->
      <div class="fade-up fade-up-delay-2 mt-6 flex items-center gap-4 sm:mt-8">
        <NuxtLink
          to="/kalkylator"
          class="btn-growth inline-flex items-center gap-2 px-6 py-4 text-base sm:px-8 sm:text-[17px]"
          aria-label="Starta kalkylatorn och beräkna din besparing vid lånekonsolidering"
        >
          Börja räkna
        </NuxtLink>
        <span class="text-lg" style="color: #7890a8">→</span>
      </div>
    </section>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-4 sm:px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Swedish Averages Section -->
    <section class="mx-auto max-w-[1120px] px-4 pt-6 pb-4 sm:px-6" aria-label="Svenska genomsnitt för hushållsskulder">
      <h2 class="nordic-label">Svenska genomsnitt</h2>
      <p class="mt-2 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
        Jämförelse mot riksgenomsnittet baserat på SCB &amp; Finansinspektionen
      </p>

      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        <!-- Stat 1: Household debt -->
        <div class="nordic-card flex items-center gap-4 p-5 sm:flex-col sm:items-start sm:gap-0 sm:p-6">
          <div class="shrink-0">
            <p class="nordic-label mb-2" style="font-size: 11px">Hushållsskuld</p>
            <div class="mb-3 hidden h-px w-full sm:block" style="background-color: #243a5c" />
          </div>
          <div class="flex-1 sm:w-full">
            <p class="nordic-number text-[24px] sm:text-[28px]">245 000 <span class="text-sm font-normal" style="color: #7890a8">kr</span></p>
            <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Riksgenomsnitt (SCB 2024)</p>
            <p class="mt-2 text-sm font-medium sm:mt-3" style="color: #22c55e">Din: 245 000 kr</p>
          </div>
        </div>

        <!-- Stat 2: Average rate -->
        <div class="nordic-card flex items-center gap-4 p-5 sm:flex-col sm:items-start sm:gap-0 sm:p-6">
          <div class="shrink-0">
            <p class="nordic-label mb-2" style="font-size: 11px">Snittränta på privatlån</p>
            <div class="mb-3 hidden h-px w-full sm:block" style="background-color: #243a5c" />
          </div>
          <div class="flex-1 sm:w-full">
            <p class="nordic-number text-[24px] sm:text-[28px]">9.2<span class="text-lg">%</span></p>
            <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Riksgenomsnitt (FI 2024)</p>
            <p class="mt-2 text-sm font-medium sm:mt-3" style="color: #22c55e">Din: 9.1%</p>
          </div>
        </div>

        <!-- Stat 3: Number of loans -->
        <div class="nordic-card flex items-center gap-4 p-5 sm:flex-col sm:items-start sm:gap-0 sm:p-6">
          <div class="shrink-0">
            <p class="nordic-label mb-2" style="font-size: 11px">Antal lån per hushåll</p>
            <div class="mb-3 hidden h-px w-full sm:block" style="background-color: #243a5c" />
          </div>
          <div class="flex-1 sm:w-full">
            <p class="nordic-number text-[24px] sm:text-[28px]">2.8 <span class="text-sm font-normal" style="color: #7890a8">st</span></p>
            <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Riksgenomsnitt (SCB 2024)</p>
            <div class="mt-2 flex items-center gap-2 sm:mt-3">
              <p class="text-sm font-medium" style="color: #efaa50">Dina: 3 st</p>
              <div class="h-4 w-4 rounded-full" style="background-color: #efaa50" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works section -->
    <div class="mx-auto max-w-[1120px] px-4 pt-8 sm:px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <section class="mx-auto max-w-[1120px] px-4 pb-6 pt-8 sm:px-6" aria-label="Så fungerar lånekonsolidering">
      <h2 class="mb-4 text-xl font-bold" style="color: #f0f5fa">Så fungerar lånekonsolidering</h2>
      <div class="grid gap-5 sm:grid-cols-3">
        <div class="nordic-card p-5">
          <p class="nordic-label mb-2" style="font-size: 11px; color: #22c55e">Steg 01</p>
          <h3 class="mb-2 text-base font-semibold" style="color: #f0f5fa">Lägg in dina lån</h3>
          <p class="text-sm" style="color: #7890a8">Ange belopp, ränta och månadskostnad för varje lån du har idag.</p>
        </div>
        <div class="nordic-card p-5">
          <p class="nordic-label mb-2" style="font-size: 11px; color: #22c55e">Steg 02</p>
          <h3 class="mb-2 text-base font-semibold" style="color: #f0f5fa">Se din besparing</h3>
          <p class="text-sm" style="color: #7890a8">Kalkylatorn räknar ut din månads- och totalbesparing om du samlar till ett lån med lägre ränta.</p>
        </div>
        <div class="nordic-card p-5">
          <p class="nordic-label mb-2" style="font-size: 11px; color: #22c55e">Steg 03</p>
          <h3 class="mb-2 text-base font-semibold" style="color: #f0f5fa">Jämför räntor</h3>
          <p class="text-sm" style="color: #7890a8">
            Ta resultatet vidare och
            <a href="https://trygga.com" target="_blank" rel="noopener noreferrer" style="color: #acc8e6; text-decoration: underline">jämför räntor på Trygga.com</a>
            för att hitta bästa erbjudandet på samlingslån.
          </p>
        </div>
      </div>

      <div class="mt-8 text-center">
        <NuxtLink
          to="/kalkylator"
          class="btn-growth inline-flex items-center gap-2 px-8 py-4 text-[16px]"
          aria-label="Gå till kalkylatorn och beräkna din besparing vid samla lån"
        >
          Räkna ut din besparing →
        </NuxtLink>
      </div>
    </section>

    <!-- FAQ Section -->
    <div class="mx-auto max-w-[1120px] px-4 pt-6 sm:px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <section class="mx-auto max-w-[1120px] px-4 pb-8 pt-8 sm:px-6" aria-label="Vanliga frågor om att samla lån och lånekonsolidering">
      <h2 class="mb-6 text-xl font-bold" style="color: #f0f5fa">Vanliga frågor om att samla lån</h2>

      <div class="space-y-4">
        <details class="nordic-card p-5" open>
          <summary class="cursor-pointer font-semibold" style="color: #acc8e6">Vad innebär det att samla lån (lånekonsolidering)?</summary>
          <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">
            Att samla lån (lånekonsolidering) innebär att du ersätter flera mindre lån — till exempel konsumtionslån,
            kreditkortsskulder och avbetalningar — med ett enda lån. Det nya lånet har ofta en lägre ränta, vilket
            minskar din totala månadskostnad och gör det enklare att hålla koll på din ekonomi.
            <NuxtLink to="/kalkylator" style="color: #acc8e6; text-decoration: underline">Prova kalkylatorn gratis →</NuxtLink>
          </p>
        </details>

        <details class="nordic-card p-5">
          <summary class="cursor-pointer font-semibold" style="color: #acc8e6">Hur mycket kan jag spara på att samla lån?</summary>
          <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">
            Besparingen beror på dina nuvarande räntor och det nya lånebeloppet. Genomsnittliga svenska hushåll med
            2–3 smålån kan spara 500–2 000 kr per månad. Använd vår
            <NuxtLink to="/kalkylator" style="color: #acc8e6; text-decoration: underline">kalkylator för lånekonsolidering</NuxtLink>
            för att beräkna din exakta besparing baserat på dina verkliga lån.
          </p>
        </details>

        <details class="nordic-card p-5">
          <summary class="cursor-pointer font-semibold" style="color: #acc8e6">Vad är skillnaden mellan lånekonsolidering och skuldsanering?</summary>
          <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">
            Lånekonsolidering innebär att du tar ett nytt lån för att betala av befintliga skulder — du betalar fortfarande
            tillbaka hela beloppet men till bättre villkor och lägre ränta. Skuldsanering är ett juridiskt förfarande via
            Kronofogden där delar av skulden kan efterskänkas för personer i allvarlig skuldkris.
          </p>
        </details>

        <details class="nordic-card p-5">
          <summary class="cursor-pointer font-semibold" style="color: #acc8e6">Hur jämför jag räntor när jag ska samla lån?</summary>
          <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">
            Jämför alltid den effektiva räntan (ÅRK — Årlig Räntekostnad) hos olika långivare, inte bara nominell ränta.
            Effektiv ränta inkluderar alla avgifter och ger en rättvisande bild av den verkliga kostnaden.
            <a href="https://trygga.com" target="_blank" rel="noopener noreferrer" style="color: #acc8e6; text-decoration: underline">Trygga.com</a>
            jämför räntor från flera banker och långivare åt dig kostnadsfritt.
          </p>
        </details>

        <details class="nordic-card p-5">
          <summary class="cursor-pointer font-semibold" style="color: #acc8e6">Vilka lån kan jag samla ihop?</summary>
          <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">
            Du kan vanligtvis samla konsumtionslån, billån, kreditkortsskulder, avbetalningsköp och privatlån.
            Bolån samlas separat och ingår normalt inte i ett samlingslån. Kontrollera alltid med din långivare
            vilka skulder som kan inkluderas.
          </p>
        </details>

        <details class="nordic-card p-5">
          <summary class="cursor-pointer font-semibold" style="color: #acc8e6">Är Sparkalkylatorn gratis att använda?</summary>
          <p class="mt-3 text-sm leading-relaxed" style="color: #7890a8">
            Ja, Sparkalkylatorn är helt gratis att använda. Verktyget är framtaget av
            <a href="https://trygga.com" target="_blank" rel="noopener noreferrer" style="color: #acc8e6; text-decoration: underline">Trygga.com</a>
            för att hjälpa svenska hushåll att förstå potentialen i att samla sina lån. Inga dolda kostnader eller registrering krävs.
          </p>
        </details>
      </div>
    </section>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-4 sm:px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Data Sources (compact) -->
    <section class="mx-auto max-w-[1120px] px-4 pb-2 pt-4 sm:px-6" aria-label="Datakällor">
      <div class="flex flex-wrap items-center gap-x-6 gap-y-1">
        <p class="nordic-label" style="font-size: 10px">Datakällor:</p>
        <p class="text-xs" style="color: #3c6190">SCB (Statistiska centralbyrån)</p>
        <p class="text-xs" style="color: #3c6190">Finansinspektionen</p>
        <p class="text-xs" style="color: #3c6190">Sveriges Riksbank</p>
      </div>
    </section>

    <!-- Datum line -->
    <div class="mx-auto max-w-[1120px] px-4 pt-4 sm:px-6">
      <div class="h-px w-full" style="background-color: #183052" />
    </div>

    <!-- Footer -->
    <footer class="mx-auto max-w-[1120px] px-4 pb-14 pt-6 sm:px-6">
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <a href="https://trygga.com" target="_blank" rel="noopener noreferrer" class="text-2xl font-bold sm:text-3xl" style="color: #f0f5fa" aria-label="Besök Trygga.com">trygga.com</a>
          <p class="mt-2 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
            Sparkalkylatorn — ett gratis verktyg för dig som vill spara pengar på lån
          </p>
          <nav class="mt-4 flex flex-wrap gap-4" aria-label="Sidonavigering">
            <NuxtLink to="/" class="text-xs" style="color: #506580">Hem</NuxtLink>
            <NuxtLink to="/kalkylator" class="text-xs" style="color: #506580">Kalkylator för samla lån</NuxtLink>
            <a href="https://trygga.com" target="_blank" rel="noopener noreferrer" class="text-xs" style="color: #506580">Trygga.com — Jämför räntor</a>
          </nav>
        </div>
        <div class="sm:text-right">
          <p class="nordic-label" style="color: #3870a5">Nordic Clarity</p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">Design Philosophy v1.0</p>
          <p class="mt-1 nordic-label" style="font-size: 11px; color: #506580">2026</p>
        </div>
      </div>
    </footer>

  </div>
</template>
