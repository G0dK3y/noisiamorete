import { readdir, stat, unlink, rename, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"

const SRC_DIR = path.resolve("public/images/rete_webp")
const MAX_WIDTH = 1920
const QUALITY = 82

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await walk(full)))
    } else {
      out.push(full)
    }
  }
  return out
}

async function flattenAndConvert() {
  if (!existsSync(SRC_DIR)) {
    console.error(`Missing ${SRC_DIR}`)
    process.exit(1)
  }

  const files = await walk(SRC_DIR)
  const pngs = files.filter((f) => /\.png$/i.test(f))
  const webps = files.filter((f) => /\.webp$/i.test(f))

  console.log(`Found ${pngs.length} PNG and ${webps.length} WebP files.`)

  // Move nested webp files into root SRC_DIR with unique names
  for (const file of webps) {
    if (path.dirname(file) === SRC_DIR) continue
    const base = path.basename(file)
    const target = path.join(SRC_DIR, base)
    if (existsSync(target)) {
      console.log(`SKIP move (exists): ${base}`)
      continue
    }
    await rename(file, target)
    console.log(`MOVED → ${base}`)
  }

  let converted = 0
  let failed = 0
  let savedBytes = 0

  for (const input of pngs) {
    const baseName = path.basename(input, path.extname(input))
    const output = path.join(SRC_DIR, `${baseName}.webp`)

    try {
      const { size: srcSize } = await stat(input)
      const img = sharp(input)
      const meta = await img.metadata()

      let pipeline = img
      if (meta.width && meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      }

      await pipeline.webp({ quality: QUALITY }).toFile(output)
      const { size: outSize } = await stat(output)

      savedBytes += srcSize - outSize
      converted++
      console.log(
        `✓ ${path.basename(input)} (${(srcSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB)`
      )

      await unlink(input)
    } catch (err) {
      failed++
      console.error(`✗ ${path.basename(input)}: ${err.message}`)
    }
  }

  // Remove now-empty nested directories
  async function removeEmptyDirs(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const full = path.join(dir, entry.name)
        await removeEmptyDirs(full)
        const remaining = await readdir(full)
        if (remaining.length === 0) {
          await (await import("node:fs/promises")).rmdir(full)
          console.log(`RMDIR ${path.relative(SRC_DIR, full)}`)
        }
      }
    }
  }
  await removeEmptyDirs(SRC_DIR)

  console.log("\n========")
  console.log(`Converted: ${converted}`)
  console.log(`Failed:    ${failed}`)
  console.log(`Saved:     ${(savedBytes / 1024 / 1024).toFixed(2)} MB`)
}

flattenAndConvert().catch((err) => {
  console.error(err)
  process.exit(1)
})
