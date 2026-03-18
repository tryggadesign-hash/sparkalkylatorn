<script setup lang="ts">
interface BreadcrumbItem {
  name: string
  href: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const siteBase = 'https://sparkalkylatorn.trygga.com'

const schemaItems = computed(() =>
  props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteBase}${item.href}`,
  }))
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: schemaItems.value,
      }),
    },
  ],
})
</script>

<template>
  <nav aria-label="Brödsmulor" class="mx-auto max-w-[1120px] px-4 pt-4 pb-2 sm:px-6">
    <ol class="flex flex-wrap items-center gap-1" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(item, index) in items"
        :key="item.href"
        class="flex items-center gap-1"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <!-- Separator (not before first item) -->
        <span
          v-if="index > 0"
          class="select-none"
          style="color: #243a5c; font-size: 11px"
          aria-hidden="true"
        >
          /
        </span>

        <!-- Last item (current page) — plain text, not a link -->
        <span
          v-if="index === items.length - 1"
          class="font-medium"
          style="
            font-family: 'GeistMono', 'JetBrains Mono', ui-monospace, monospace;
            font-size: 11px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #7890a8;
          "
          itemprop="name"
          aria-current="page"
        >
          {{ item.name }}
        </span>

        <!-- Earlier items — clickable links -->
        <NuxtLink
          v-else
          :to="item.href"
          itemprop="item"
          class="transition-colors hover:text-[#acc8e6]"
          style="
            font-family: 'GeistMono', 'JetBrains Mono', ui-monospace, monospace;
            font-size: 11px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #3c6190;
          "
        >
          <span itemprop="name">{{ item.name }}</span>
        </NuxtLink>

        <meta itemprop="position" :content="String(index + 1)" />
      </li>
    </ol>
  </nav>
</template>
