import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        nordic: {
          50: '#f0f5fa',
          100: '#dae5f2',
          200: '#b8cfe6',
          300: '#8cb1d5',
          400: '#5a8dbf',
          500: '#3870a5',
          600: '#2b5a8a',
          700: '#244a70',
          800: '#1a3556',
          900: '#0f1726',
          950: '#0c1426',
        },
        growth: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
    },
  },
} satisfies Config
