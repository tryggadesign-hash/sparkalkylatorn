import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), '.data', 'results')

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid result ID' })
  }

  const filePath = join(DATA_DIR, `${id}.json`)

  if (!existsSync(filePath)) {
    throw createError({ statusCode: 404, statusMessage: 'Result not found' })
  }

  const data = readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
})
