import { brotliCompressSync, constants, gzipSync } from 'node:zlib'
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const indexPath = join(process.cwd(), 'dist', 'index.html')
const indexHtml = readFileSync(indexPath)

const gzip = gzipSync(indexHtml, { level: 9 })
const brotli = brotliCompressSync(indexHtml, {
  params: {
    [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY,
  },
})

writeFileSync(`${indexPath}.gz`, gzip)
writeFileSync(`${indexPath}.br`, brotli)

console.log(`Compressed index.html: ${gzip.length} bytes gzip, ${brotli.length} bytes brotli`)