<script setup lang="ts">
import type { LoanInput } from '~/types/loan'

const props = defineProps<{
  loan: LoanInput
  index: number
  canRemove: boolean
}>()

const emit = defineEmits<{
  update: [loan: LoanInput]
  remove: []
}>()

function formatNumber(value: number): string {
  if (!value) return ''
  return value.toLocaleString('sv-SE')
}

function parseNumber(value: string): number {
  const cleaned = value.replace(/\s/g, '').replace(',', '.')
  const num = parseFloat(cleaned)
  return isNaN(num) ? 0 : num
}

function onAmountInput(e: Event) {
  const val = parseNumber((e.target as HTMLInputElement).value)
  emit('update', { ...props.loan, amount: val })
}

function onRateInput(e: Event) {
  const val = parseNumber((e.target as HTMLInputElement).value)
  emit('update', { ...props.loan, interestRate: val })
}

function onMonthlyInput(e: Event) {
  const val = parseNumber((e.target as HTMLInputElement).value)
  emit('update', { ...props.loan, monthlyPayment: val })
}
</script>

<template>
  <div class="nordic-card p-6 transition-all">
    <div class="flex items-center justify-between mb-3">
      <p class="nordic-label">Lån {{ String(index + 1).padStart(2, '0') }}</p>
      <button
        v-if="canRemove"
        class="text-xs px-2 py-1 rounded transition-colors"
        style="color: #7890a8; background-color: #1a3050"
        @click="emit('remove')"
      >
        Ta bort
      </button>
    </div>
    <div class="h-px w-full mb-5" style="background-color: #243a5c" />

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <!-- Amount -->
      <div>
        <label class="nordic-label block mb-2" style="font-size: 11px">Belopp (kr)</label>
        <input
          type="text"
          inputmode="numeric"
          :placeholder="'125 000'"
          :value="loan.amount ? formatNumber(loan.amount) : ''"
          class="w-full rounded-lg border px-4 py-3 text-lg font-bold outline-none transition-colors focus:border-[#3870a5]"
          style="background-color: #0f1a30; border-color: #243a5c; color: #f0f5fa"
          @input="onAmountInput"
        />
      </div>

      <!-- Interest Rate -->
      <div>
        <label class="nordic-label block mb-2" style="font-size: 11px">Ränta (%)</label>
        <input
          type="text"
          inputmode="decimal"
          placeholder="8.9"
          :value="loan.interestRate || ''"
          class="w-full rounded-lg border px-4 py-3 text-lg font-bold outline-none transition-colors focus:border-[#3870a5]"
          style="background-color: #0f1a30; border-color: #243a5c; color: #acc8e6"
          @input="onRateInput"
        />
      </div>

      <!-- Monthly Payment -->
      <div>
        <label class="nordic-label block mb-2" style="font-size: 11px">Månadskostnad (kr)</label>
        <input
          type="text"
          inputmode="numeric"
          :placeholder="'2 340'"
          :value="loan.monthlyPayment ? formatNumber(loan.monthlyPayment) : ''"
          class="w-full rounded-lg border px-4 py-3 text-lg font-bold outline-none transition-colors focus:border-[#3870a5]"
          style="background-color: #0f1a30; border-color: #243a5c; color: #f0f5fa"
          @input="onMonthlyInput"
        />
      </div>
    </div>
  </div>
</template>
