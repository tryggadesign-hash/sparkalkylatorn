import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), '.data', 'emails')

function ensureDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.email || !body?.resultId || !body?.consentTimestamp) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }

  const entry = {
    email: body.email,
    resultId: body.resultId,
    consentTimestamp: body.consentTimestamp,
    consentText: 'Jag godkänner att mina uppgifter sparas enligt GDPR',
    createdAt: new Date().toISOString(),
  }

  ensureDir()

  const listPath = join(DATA_DIR, 'subscribers.json')
  let list: any[] = []
  if (existsSync(listPath)) {
    list = JSON.parse(readFileSync(listPath, 'utf-8'))
  }
  list.push(entry)
  writeFileSync(listPath, JSON.stringify(list, null, 2))

  return { success: true }
})
