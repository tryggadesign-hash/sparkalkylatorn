<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { to: '/', label: 'Hem' },
  { to: '/kalkylator', label: 'Kalkylator' },
  { to: '/insikter', label: 'Insikter' },
]

watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50" style="background-color: rgba(12, 20, 38, 0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px)">
    <div class="mx-auto max-w-[1120px] px-4 sm:px-6">
      <div class="flex h-14 items-center justify-between sm:h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="text-lg font-bold" style="color: #f0f5fa">Sparkalkylatorn</span>
          <span class="hidden text-xs sm:inline" style="color: #506580">av trygga.com</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-1 sm:flex" aria-label="Huvudnavigering">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            :style="{
              color: route.path === link.to ? '#22c55e' : '#7890a8',
              backgroundColor: route.path === link.to ? '#163c2d' : 'transparent',
            }"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://trygga.com"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-2 btn-growth px-4 py-2 text-sm"
          >
            Jämför lån →
          </a>
        </nav>

        <!-- Mobile hamburger -->
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg sm:hidden"
          style="color: #7890a8"
          aria-label="Öppna meny"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileOpen"
        class="border-t pb-4 pt-2 sm:hidden"
        style="border-color: #183052"
      >
        <nav class="flex flex-col gap-1" aria-label="Mobilmeny">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-4 py-3 text-sm font-medium transition-colors"
            :style="{
              color: route.path === link.to ? '#22c55e' : '#acc8e6',
              backgroundColor: route.path === link.to ? '#163c2d' : 'transparent',
            }"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://trygga.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 btn-growth px-4 py-3 text-center text-sm"
          >
            Jämför lån på Trygga.com →
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
