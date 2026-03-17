<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const props = defineProps<{
  currentCost: number
  consolidatedCost: number
}>()

const chartData = computed(() => ({
  labels: ['Nuvarande', 'Samlat lån'],
  datasets: [
    {
      data: [props.currentCost, props.consolidatedCost],
      backgroundColor: ['#acc8e6', '#22c55e'],
      borderRadius: 8,
      barThickness: 48,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `${Math.round(ctx.raw).toLocaleString('sv-SE')} kr/mån`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#7890a8', font: { size: 12, family: 'Inter' } },
      border: { display: false },
    },
    y: {
      grid: { color: '#1a3050' },
      ticks: {
        color: '#506580',
        font: { size: 11, family: 'Inter' },
        callback: (v: any) => `${v.toLocaleString('sv-SE')} kr`,
      },
      border: { display: false },
    },
  },
}
</script>

<template>
  <div class="h-[200px]">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
