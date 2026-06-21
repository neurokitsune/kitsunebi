// Converts the full-res originals in /be into web-ready WebP copies in /public/cards.
// Originals (1536x2752, ~2-3MB each, ~207MB total) stay untouched and git-ignored.
//
//   be/major/{0..21}.jpeg            -> public/cards/major/{0..21}.webp
//   be/{wands,cups,swords,pentacles}/{1..14}.jpeg -> public/cards/<suit>/{n}.webp
//
// Run with: npm run optimize:cards
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, parse, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const srcRoot = join(root, 'be')
const outRoot = join(root, 'public', 'cards')

const SUITS = ['major', 'wands', 'cups', 'swords', 'pentacles']
const TARGET_WIDTH = 800 // plenty for mobile card display at 2x
const QUALITY = 80

if (!existsSync(srcRoot)) {
  console.error(`Source folder not found: ${srcRoot}`)
  process.exit(1)
}

let converted = 0
for (const suit of SUITS) {
  const srcDir = join(srcRoot, suit)
  if (!existsSync(srcDir)) {
    console.warn(`skip: ${suit} (no folder)`)
    continue
  }
  const outDir = join(outRoot, suit)
  await mkdir(outDir, { recursive: true })

  const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png)$/i.test(f))
  for (const file of files) {
    const { name } = parse(file)
    const out = join(outDir, `${name}.webp`)
    await sharp(join(srcDir, file))
      .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out)
    converted++
  }
  console.log(`${suit}: ${files.length} cards`)
}

console.log(`\nDone. ${converted} cards written to public/cards/`)
