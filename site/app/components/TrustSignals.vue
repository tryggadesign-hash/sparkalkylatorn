<script setup lang="ts">
interface DataSource {
  id: string
  shortName: string
  fullName: string
  description: string
  url: string
}

const sources: DataSource[] = [
  {
    id: 'scb',
    shortName: 'SCB',
    fullName: 'Statistiska centralbyrån',
    description: 'Hushållens skuldsättning och konsumtionslån',
    url: 'https://www.scb.se',
  },
  {
    id: 'fi',
    shortName: 'FI',
    fullName: 'Finansinspektionen',
    description: 'Tillsyn av kreditmarknaden och konsumentskydd',
    url: 'https://www.fi.se',
  },
  {
    id: 'riksbanken',
    shortName: 'Riksbanken',
    fullName: 'Sveriges Riksbank',
    description: 'Styrränta och marknadsräntor',
    url: 'https://www.riksbank.se',
  },
]
</script>

<template>
  <section class="mx-auto max-w-[1120px] px-4 pt-10 pb-4 sm:px-6">
    <!-- Section header -->
    <p class="nordic-label">Verifierade datakällor</p>
    <h2 class="mt-3 text-xl font-bold sm:text-2xl" style="color: #f0f5fa">
      Data från svenska myndigheter
    </h2>
    <p class="mt-2 text-sm italic" style="color: #7890a8; font-family: 'Georgia', serif">
      Alla beräkningar baseras på officiell statistik — inte uppskattningar
    </p>

    <div class="mt-4 h-px w-full" style="background-color: #183052" />

    <!-- Source badges grid -->
    <div class="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3">
      <a
        v-for="source in sources"
        :key="source.id"
        :href="source.url"
        target="_blank"
        rel="noopener noreferrer"
        class="nordic-card group flex flex-col gap-3 p-5 transition-all"
        style="border: 1px solid #1a3050; text-decoration: none"
        :aria-label="`${source.fullName} — öppnas i ny flik`"
      >
        <!-- Badge row -->
        <div class="flex items-center justify-between">
          <span
            class="inline-flex items-center rounded-md px-3 py-1 text-xs font-bold tracking-widest"
            style="
              background-color: #0c2040;
              border: 1px solid #22c55e;
              color: #22c55e;
              font-family: 'GeistMono', 'JetBrains Mono', ui-monospace, monospace;
              letter-spacing: 0.12em;
            "
          >
            {{ source.shortName }}
          </span>
          <!-- External link indicator -->
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="opacity-40 transition-opacity group-hover:opacity-80"
            aria-hidden="true"
          >
            <path
              d="M5.25 2.625H2.625A1.125 1.125 0 0 0 1.5 3.75v7.625A1.125 1.125 0 0 0 2.625 12.5H10.25a1.125 1.125 0 0 0 1.125-1.125V8.75M8.75 1.5H12.5M12.5 1.5V5.25M12.5 1.5L5.25 8.75"
              stroke="#7890a8"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Full name -->
        <div>
          <p
            class="text-sm font-semibold leading-tight transition-colors group-hover:text-[#d0e8ff]"
            style="color: #f0f5fa"
          >
            {{ source.fullName }}
          </p>
          <p class="mt-1 text-xs leading-snug" style="color: #7890a8">
            {{ source.description }}
          </p>
        </div>

        <!-- Verified indicator -->
        <div class="flex items-center gap-1.5 mt-auto">
          <span
            class="h-1.5 w-1.5 rounded-full"
            style="background-color: #22c55e"
            aria-hidden="true"
          />
          <span
            class="text-xs"
            style="
              font-family: 'GeistMono', 'JetBrains Mono', ui-monospace, monospace;
              font-size: 10px;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              color: #3c6190;
            "
          >
            Officiell källa
          </span>
        </div>
      </a>
    </div>

    <!-- Footer note -->
    <p class="mt-4 text-xs italic" style="color: #506580; font-family: 'Georgia', serif">
      Data uppdateras löpande i takt med att myndigheterna publicerar ny statistik.
    </p>
  </section>
</template>
