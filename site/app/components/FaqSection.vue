<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const props = withDefaults(
  defineProps<{
    faqs?: FaqItem[]
  }>(),
  {
    faqs: () => [
      {
        question: 'Vad innebär det att samla sina lån?',
        answer:
          'Att samla sina lån innebär att du tar ett nytt, större lån som ersätter alla dina befintliga lån — konsumtionslån, kreditkort och avbetalningar. Istället för att betala flera olika fakturor varje månad med olika räntor och förfallodatum, betalar du en enda månadsavgift. Ofta till en lägre ränta, vilket minskar din totala månadskostnad och gör det lättare att hålla koll på ekonomin.',
      },
      {
        question: 'Hur mycket kan jag spara på att samla lån?',
        answer:
          'Det beror på dina nuvarande lån och räntor. Svenska hushåll med flera konsumtionslån betalar i genomsnitt 9–12 % ränta. Genom att samla dem till ett samlat lån med lägre ränta kan många spara 500–3 000 kr per månad. Använd vår kalkylator för att räkna ut din exakta besparing baserat på dina egna lån.',
      },
      {
        question: 'Påverkas min kreditvärdighet?',
        answer:
          'Ja, men ofta positivt på sikt. När du ansöker om ett nytt lån gör långivaren en kreditupplysning, vilket kan ge en tillfällig liten sänkning av kreditvärdigheten. Men när du sedan betalar av ett samlat lån i tid och dina gamla skulder är reglerade, förbättras vanligtvis din kreditbild. Antal öppna kreditengagemang minskar, vilket banker och kreditinstitut ser positivt på.',
      },
      {
        question: 'Vilka lån kan man samla?',
        answer:
          'Du kan vanligtvis samla de flesta typer av privatlån: blancolån, konsumtionslån, kreditkortsskulder, avbetalningsköp och handelskredit. Bolån går normalt inte att inkludera i ett samlat konsumtionslån. Vissa långivare tillåter även att du samlar SMS-lån och snabblån, fast de kan ha krav på att de löses direkt vid utbetalning av det nya lånet.',
      },
      {
        question: 'Hur lång tid tar det att samla sina lån?',
        answer:
          'Processen går ofta snabbt. Ansökan tar vanligtvis 5–15 minuter online, och många långivare lämnar besked inom några timmar. Om ansökan beviljas kan pengarna betalas ut samma dag eller nästa bankdag. Räkna med totalt 1–3 bankdagar från ansökan till att dina gamla lån är lösta och du betalar ett enda samlat lån.',
      },
      {
        question: 'Är det någon kostnad att samla lån?',
        answer:
          'Att ansöka via en lånförmedlare som Trygga.com är helt kostnadsfritt — du betalar ingenting för att jämföra erbjudanden. Det nya lånet i sig har ett räntenetto och eventuellt uppläggningsavgift, precis som vilket lån som helst. Observera att vissa gamla lån kan ha lösenavgift om du avslutar dem i förtid, vilket bör räknas in i totalkostnaden.',
      },
      {
        question: 'Vad är skillnaden mellan att samla lån och skuldsanering?',
        answer:
          'Skuldsanering är en juridisk process via Kronofogden för personer med skulder de inte kan betala, och innebär att en del av skulden skrivs av. Det är en sista utväg som påverkar kreditvärdigheten kraftigt i många år. Att samla lån är däremot ett vanligt privatlån som du ansöker om hos en bank eller långivare — du betalar hela din skuld, men till bättre villkor. Alternativet passar dig som har betalningsförmåga men vill minska sina räntekostnader.',
      },
      {
        question: 'Hur beräknas den nya räntan?',
        answer:
          'Räntan på ett samlat lån baseras på din kreditprofil: inkomst, befintliga skulder, betalningshistorik och anställningsform. En lånförmedlare som Trygga.com skickar din ansökan till flera banker och långivare parallellt, som sedan konkurrerar om att ge dig det bästa erbjudandet. Du får ett effektivt ränteintervall (t.ex. 4,5–18 %) och det slutliga erbjudandet speglar din personliga risknivå.',
      },
    ],
  }
)

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }),
    },
  ],
})
</script>

<template>
  <section class="mx-auto max-w-[1120px] px-4 pt-12 pb-4 sm:px-6">
    <!-- Section header -->
    <p class="nordic-label">Vanliga frågor</p>
    <h2 class="mt-3 text-2xl font-bold sm:text-3xl" style="color: #f0f5fa">
      Frågor om att samla lån
    </h2>
    <p class="mt-2 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
      Svar baserade på svenska marknadsförhållanden och myndigheters riktlinjer
    </p>

    <div class="mt-3 h-px w-full" style="background-color: #183052" />

    <!-- FAQ items -->
    <dl class="mt-6 flex flex-col gap-2">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="nordic-card overflow-hidden transition-all"
        style="border: 1px solid #1a3050"
      >
        <!-- Question button -->
        <dt>
          <button
            class="flex w-full items-start justify-between gap-4 px-4 py-5 text-left transition-colors sm:px-6"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            :id="`faq-question-${index}`"
            @click="toggle(index)"
          >
            <span
              class="text-sm font-semibold leading-snug sm:text-base"
              style="color: #f0f5fa"
            >
              {{ faq.question }}
            </span>
            <!-- Chevron icon -->
            <span
              class="mt-0.5 shrink-0 transition-transform duration-200"
              :style="{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 6.75L9 11.25L13.5 6.75"
                  stroke="#7890a8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </dt>

        <!-- Answer panel -->
        <dd
          :id="`faq-answer-${index}`"
          :aria-labelledby="`faq-question-${index}`"
          role="region"
          class="overflow-hidden transition-all duration-200"
          :style="{
            maxHeight: openIndex === index ? '600px' : '0px',
            opacity: openIndex === index ? '1' : '0',
          }"
        >
          <div class="h-px mx-4 sm:mx-6" style="background-color: #243a5c" />
          <p
            class="px-4 pt-4 pb-5 text-sm leading-relaxed sm:px-6"
            style="color: #acc8e6"
          >
            {{ faq.answer }}
          </p>
        </dd>
      </div>
    </dl>
  </section>
</template>
