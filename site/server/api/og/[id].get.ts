import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), '.data', 'results')

/**
 * Generate a simple SVG-based OG image for social sharing.
 * Returns an SVG (renders well as OG image on most platforms).
 */
export default defineEventHandler((event) => {
  // Strip .png extension from id
  let id = getRouterParam(event, 'id') || ''
  id = id.replace(/\.png$/, '')

  if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
  }

  const filePath = join(DATA_DIR, `${id}.json`)
  if (!existsSync(filePath)) {
    throw createError({ statusCode: 404, statusMessage: 'Result not found' })
  }

  const data = JSON.parse(readFileSync(filePath, 'utf-8'))
  const monthlySavings = Math.round(data.monthlySavings).toLocaleString('sv-SE')
  const totalSavings = Math.round(data.totalSavings).toLocaleString('sv-SE')
  const numLoans = data.loans?.length || 0

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0c1426"/>
      <stop offset="100%" stop-color="#111e34"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <line x1="60" y1="80" x2="1140" y2="80" stroke="#183052" stroke-width="1"/>
  <text x="60" y="60" fill="#7890a8" font-family="sans-serif" font-size="14" letter-spacing="2">SPARKALKYLATORN</text>
  <text x="1140" y="60" fill="#506580" font-family="sans-serif" font-size="12" text-anchor="end">trygga.com</text>

  <text x="60" y="160" fill="#acc8e6" font-family="sans-serif" font-size="28">Jag kan spara</text>
  <text x="60" y="280" fill="#22c55e" font-family="sans-serif" font-size="96" font-weight="bold">${monthlySavings} kr</text>
  <text x="60" y="330" fill="#508c64" font-family="sans-serif" font-size="24">per månad</text>

  <text x="60" y="400" fill="#acc8e6" font-family="sans-serif" font-size="24">genom att samla mina ${numLoans} lån</text>
  <text x="60" y="450" fill="#4ade80" font-family="sans-serif" font-size="22">Total besparing: ${totalSavings} kr</text>

  <line x1="60" y1="490" x2="1140" y2="490" stroke="#183052" stroke-width="1"/>
  <rect x="60" y="520" width="280" height="50" rx="10" fill="#22c55e"/>
  <text x="200" y="552" fill="#0c1426" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Räkna på dina lån →</text>

  <text x="1140" y="560" fill="#3c6190" font-family="sans-serif" font-size="12" text-anchor="end">Data: SCB · Finansinspektionen · Riksbanken</text>
</svg>`

  setResponseHeader(event, 'Content-Type', 'image/svg+xml')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=86400')
  return svg
})
