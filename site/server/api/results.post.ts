import { nanoid } from 'nanoid'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), '.data', 'results')

function ensureDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body || !body.loans || !Array.isArray(body.loans) || body.loans.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid result data' })
  }

  const id = nanoid(10)
  const result = {
    ...body,
    id,
    createdAt: new Date().toISOString(),
  }

  ensureDir()
  writeFileSync(join(DATA_DIR, `${id}.json`), JSON.stringify(result, null, 2))

  return { id }
})
