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
      <div class="flex gap-3">
        <input
          v-model="email"
          type="email"
          placeholder="din@email.se"
          class="nordic-card border px-4 py-3 text-sm flex-1 max-w-[420px] outline-none focus:border-[#3870a5]"
          style="border-color: #32506e; color: #acc8e6; background-color: #12243e"
        />
        <button
          :disabled="!email || !consent || status === 'sending'"
          class="btn-growth px-6 py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          @click="submit"
        >
          {{ status === 'sending' ? 'Skickar...' : 'Skicka →' }}
        </button>
      </div>

      <label class="mt-3 flex items-start gap-2 cursor-pointer">
        <input
          v-model="consent"
          type="checkbox"
          class="mt-1 rounded"
          style="accent-color: #22c55e"
        />
        <span class="text-xs" style="color: #506580">
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
