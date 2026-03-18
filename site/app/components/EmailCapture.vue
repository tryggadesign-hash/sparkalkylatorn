<script setup lang="ts">
const props = defineProps<{
  resultId: string
}>()

const email = ref('')
const consent = ref(false)
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

async function submit() {
  if (!email.value || !consent.value) return
  status.value = 'sending'
  try {
    await $fetch('/api/email', {
      method: 'POST',
      body: {
        email: email.value,
        resultId: props.resultId,
        consentTimestamp: new Date().toISOString(),
      },
    })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="mt-8">
    <p class="nordic-label mb-3">Skicka rapporten till din mail</p>

    <div v-if="status === 'success'" class="rounded-lg px-4 py-3" style="background-color: #163c2d">
      <p class="text-sm font-medium" style="color: #22c55e">Skickat! Kolla din inkorg.</p>
    </div>

    <template v-else>
      <div class="flex flex-col gap-3 sm:flex-row">
        <input
          v-model="email"
          type="email"
          inputmode="email"
          autocomplete="email"
          placeholder="din@email.se"
          class="nordic-card border px-4 py-4 text-sm w-full sm:flex-1 sm:max-w-[420px] outline-none focus:border-[#3870a5] min-h-[52px]"
          style="border-color: #32506e; color: #acc8e6; background-color: #12243e; font-size: 16px"
        />
        <button
          :disabled="!email || !consent || status === 'sending'"
          class="btn-growth px-6 py-4 text-sm w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed min-h-[52px]"
          @click="submit"
        >
          {{ status === 'sending' ? 'Skickar...' : 'Skicka →' }}
        </button>
      </div>

      <label class="mt-3 flex items-start gap-3 cursor-pointer">
        <input
          v-model="consent"
          type="checkbox"
          class="mt-0.5 rounded shrink-0 h-5 w-5"
          style="accent-color: #22c55e"
        />
        <span class="text-xs leading-relaxed" style="color: #506580">
          Jag godkänner att mina uppgifter sparas enligt GDPR.
          <a href="#" class="underline">Integritetspolicy →</a>
        </span>
      </label>

      <p v-if="status === 'error'" class="mt-2 text-xs" style="color: #ef4444">
        Något gick fel. Försök igen.
      </p>
    </template>
  </div>
</template>
