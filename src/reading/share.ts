import type { Card, Lang } from '../data/types'
import { cardImageUrl } from './draw'

// ── Instagram-story share ──────────────────────────────────────────────────
// Instagram has no web "post" API, so the reliable path on mobile is to render
// a story-sized (1080×1920) image and hand it to the native share sheet via the
// Web Share API — Instagram (Stories / Feed / Direct) shows up there. On
// browsers without file-share support (most desktops) we fall back to a
// download so the user can post it manually.

const W = 1080
const H = 1920
const SERIF = "Georgia, 'Times New Roman', serif"
const SANS = "system-ui, -apple-system, 'Segoe UI', sans-serif"

interface ShareLabels {
  /** Position label already localized (Past / Cause / …), if any. */
  position?: string
  /** "created by …" footer line. */
  madeBy: string
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`failed to load ${src}`))
    img.src = src
  })
}

/** Rounded-rect path on the current context. */
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

/** Break text into lines that fit `maxW` at the context's current font. */
function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (ctx.measureText(next).width > maxW && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

/** Draw pre-wrapped lines centered at cx. Returns the y past the block. */
function drawLines(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  cx: number,
  y: number,
  lineH: number,
): number {
  let cy = y
  for (const line of lines) {
    ctx.fillText(line, cx, cy)
    cy += lineH
  }
  return cy
}

/** Draw centered text, wrapping on word boundaries. Returns the y past the block. */
function drawWrapped(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  y: number,
  maxW: number,
  lineH: number,
): number {
  return drawLines(ctx, wrapLines(ctx, text, maxW), cx, y, lineH)
}

function setLetterSpacing(ctx: CanvasRenderingContext2D, value: string) {
  // Not in older typings / browsers — guarded so it degrades gracefully.
  try {
    ;(ctx as unknown as { letterSpacing: string }).letterSpacing = value
  } catch {
    /* unsupported — ignore */
  }
}

function newCanvas(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('canvas 2d context unavailable')
  return { canvas, ctx }
}

/** Dark foxfire background + the kitsunebi wordmark and subtitle at the top. */
function drawBackdrop(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#0a0712'
  ctx.fillRect(0, 0, W, H)
  const glow = ctx.createRadialGradient(W / 2, H * 0.34, 0, W / 2, H * 0.34, H * 0.7)
  glow.addColorStop(0, '#1c1030')
  glow.addColorStop(0.6, '#0a0712')
  glow.addColorStop(1, '#080610')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, W, H)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#f5c878'
  ctx.font = `400 76px ${SERIF}`
  setLetterSpacing(ctx, '2px')
  ctx.shadowColor = 'rgba(232, 161, 58, 0.5)'
  ctx.shadowBlur = 36
  ctx.fillText('kitsunebi', W / 2, 168)
  ctx.shadowBlur = 0

  ctx.fillStyle = '#b9a9d6'
  ctx.font = `400 24px ${SANS}`
  setLetterSpacing(ctx, '6px')
  ctx.fillText("NEUROKITSUNE'S ORACLE", W / 2, 214)
  setLetterSpacing(ctx, '0px')
}

/** Draw a single card image with shadow + gold frame at the given box. */
function drawCardArt(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  radius: number,
) {
  ctx.save()
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)'
  ctx.shadowBlur = w > 400 ? 60 : 34
  ctx.shadowOffsetY = w > 400 ? 24 : 14
  roundRect(ctx, x, y, w, h, radius)
  ctx.fillStyle = '#000'
  ctx.fill()
  ctx.restore()

  ctx.save()
  roundRect(ctx, x, y, w, h, radius)
  ctx.clip()
  ctx.drawImage(img, x, y, w, h)
  ctx.restore()

  ctx.save()
  roundRect(ctx, x, y, w, h, radius)
  ctx.strokeStyle = 'rgba(232, 161, 58, 0.55)'
  ctx.lineWidth = w > 400 ? 3 : 2
  ctx.stroke()
  ctx.restore()
}

/** The "created by …" footer line at the bottom. */
function drawFooter(ctx: CanvasRenderingContext2D, madeBy: string) {
  ctx.fillStyle = '#b9a9d6'
  ctx.font = `400 24px ${SANS}`
  setLetterSpacing(ctx, '3px')
  ctx.globalAlpha = 0.75
  ctx.textAlign = 'center'
  ctx.fillText(madeBy, W / 2, H - 84)
  ctx.globalAlpha = 1
  setLetterSpacing(ctx, '0px')
}

function toBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('canvas.toBlob returned null'))),
      'image/png',
    )
  })
}

/** Render the shareable story image for a single card. */
export async function renderCardImage(
  card: Card,
  lang: Lang,
  labels: ShareLabels,
): Promise<Blob> {
  const { canvas, ctx } = newCanvas()
  drawBackdrop(ctx)

  // Card image.
  const img = await loadImage(cardImageUrl(card))
  const cardW = 560
  const cardH = Math.round((cardW * 1433) / 800)
  const cardX = (W - cardW) / 2
  const cardY = 286
  drawCardArt(ctx, img, cardX, cardY, cardW, cardH, 28)

  ctx.textAlign = 'center'
  let y = cardY + cardH + 86

  // Position label.
  if (labels.position) {
    ctx.fillStyle = '#f5c878'
    ctx.font = `400 26px ${SANS}`
    setLetterSpacing(ctx, '8px')
    ctx.fillText(labels.position.toUpperCase(), W / 2, y)
    setLetterSpacing(ctx, '0px')
    y += 56
  }

  // Card name.
  ctx.fillStyle = '#f5c878'
  ctx.font = `400 66px ${SERIF}`
  y = drawWrapped(ctx, card.name[lang], W / 2, y, W - 160, 78)

  // English equivalent (only when displaying Belarusian).
  if (lang !== 'en') {
    ctx.fillStyle = '#b9a9d6'
    ctx.font = `400 28px ${SANS}`
    y += 12
    ctx.fillText(card.name.en, W / 2, y)
    y += 44
  } else {
    y += 16
  }

  // Oracle line.
  ctx.fillStyle = '#f5c878'
  ctx.font = `italic 400 38px ${SERIF}`
  drawWrapped(ctx, card.says[lang], W / 2, y + 24, W - 200, 52)

  drawFooter(ctx, labels.madeBy)
  return toBlob(canvas)
}

interface SpreadLabels {
  /** Heading shown above the row — the spread title or the seeker's question. */
  heading: string
  /** Localized position labels, one per card (Past / Present / Future …). */
  positions: string[]
  /** "created by …" footer line. */
  madeBy: string
}

/**
 * Render a shareable story image for a multi-card spread (Fate / Question).
 * Cards sit in a row with their position above and name below; the whole group
 * is vertically centered between the brand header and the footer.
 */
export async function renderSpreadImage(
  cards: Card[],
  lang: Lang,
  labels: SpreadLabels,
): Promise<Blob> {
  const { canvas, ctx } = newCanvas()
  drawBackdrop(ctx)
  ctx.textAlign = 'center'

  const imgs = await Promise.all(cards.map((c) => loadImage(cardImageUrl(c))))
  const n = cards.length

  // Column geometry.
  const gap = 28
  const cardW = Math.floor((W - 2 * 56 - (n - 1) * gap) / n)
  const cardH = Math.round((cardW * 1433) / 800)
  const rowW = n * cardW + (n - 1) * gap
  const startX = (W - rowW) / 2

  // Pre-measure variable-height text blocks so we can center the whole group.
  const headingLineH = 54
  const nameLineH = 38
  const saysLineH = 30
  const posH = 30
  const gapHeadingToRow = 44
  const gapRowToName = 50
  const gapNameToSays = 16

  ctx.font = `italic 400 44px ${SERIF}`
  const headingLines = wrapLines(ctx, labels.heading, W - 150)
  ctx.font = `400 30px ${SERIF}`
  const nameLineCounts = cards.map((c) => wrapLines(ctx, c.name[lang], cardW + 8).length)
  const maxNameLines = Math.max(1, ...nameLineCounts)
  ctx.font = `italic 400 22px ${SERIF}`
  const saysLineCounts = cards.map((c) => wrapLines(ctx, c.says[lang], cardW - 6).length)
  const maxSaysLines = Math.max(1, ...saysLineCounts)

  const groupH =
    headingLines.length * headingLineH +
    gapHeadingToRow +
    posH +
    cardH +
    gapRowToName +
    maxNameLines * nameLineH +
    gapNameToSays +
    maxSaysLines * saysLineH

  // Center the group in the band between the header and the footer.
  const bandTop = 250
  const bandBottom = H - 150
  let y = bandTop + Math.max(0, (bandBottom - bandTop - groupH) / 2)

  // Heading (spread title / question).
  ctx.fillStyle = '#f5c878'
  ctx.font = `italic 400 44px ${SERIF}`
  y = drawLines(ctx, headingLines, W / 2, y + 40, headingLineH)
  y += gapHeadingToRow

  const rowTop = y + posH
  const nameY = rowTop + cardH + gapRowToName
  const saysY = nameY + maxNameLines * nameLineH + gapNameToSays

  cards.forEach((card, i) => {
    const x = startX + i * (cardW + gap)
    const cx = x + cardW / 2

    // Position label above the card.
    ctx.fillStyle = '#f5c878'
    ctx.font = `400 22px ${SANS}`
    setLetterSpacing(ctx, '4px')
    ctx.fillText((labels.positions[i] ?? '').toUpperCase(), cx, rowTop - 12)
    setLetterSpacing(ctx, '0px')

    drawCardArt(ctx, imgs[i], x, rowTop, cardW, cardH, 18)

    // Card name.
    ctx.fillStyle = '#f5c878'
    ctx.font = `400 30px ${SERIF}`
    drawWrapped(ctx, card.name[lang], cx, nameY, cardW + 8, nameLineH)

    // Oracle line.
    ctx.fillStyle = '#f5c878'
    ctx.font = `italic 400 22px ${SERIF}`
    drawWrapped(ctx, card.says[lang], cx, saysY, cardW - 6, saysLineH)
  })

  drawFooter(ctx, labels.madeBy)
  return toBlob(canvas)
}

export type ShareResult = 'shared' | 'downloaded'

/**
 * Whether this device can share an image file via the native share sheet.
 *
 * The web has no way to detect a specific installed app (e.g. Instagram), so
 * this is the closest proxy: on a phone, a true result means the share sheet —
 * where Instagram shows up if it's installed — is available. Returns false on
 * desktop browsers without file-share support.
 */
export function canShareImage(): boolean {
  if (typeof navigator === 'undefined' || typeof navigator.share !== 'function') {
    return false
  }
  const nav = navigator as Navigator & { canShare?: (data?: ShareData) => boolean }
  if (typeof nav.canShare !== 'function') return false
  try {
    const probe = new File([new Uint8Array(1)], 'probe.png', { type: 'image/png' })
    return nav.canShare({ files: [probe] })
  } catch {
    return false
  }
}

/** Share an image blob via the native share sheet, falling back to download. */
async function shareOrDownload(
  blob: Blob,
  filename: string,
  shareText: string,
): Promise<ShareResult> {
  const file = new File([blob], filename, { type: 'image/png' })

  const nav = navigator as Navigator & {
    canShare?: (data?: ShareData) => boolean
  }
  if (typeof navigator.share === 'function' && nav.canShare?.({ files: [file] })) {
    await navigator.share({ files: [file], title: 'kitsunebi', text: shareText })
    return 'shared'
  }

  // Fallback (desktop / unsupported): download the image.
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
  return 'downloaded'
}

/** Render and share a single card. Uses the native share sheet, falls back to download. */
export async function shareCard(
  card: Card,
  lang: Lang,
  labels: ShareLabels,
  shareText: string,
): Promise<ShareResult> {
  const blob = await renderCardImage(card, lang, labels)
  return shareOrDownload(blob, `kitsunebi-${card.id}.png`, shareText)
}

/** Render and share a multi-card spread. Uses the native share sheet, falls back to download. */
export async function shareSpread(
  cards: Card[],
  lang: Lang,
  labels: SpreadLabels,
  shareText: string,
): Promise<ShareResult> {
  const blob = await renderSpreadImage(cards, lang, labels)
  return shareOrDownload(blob, 'kitsunebi-spread.png', shareText)
}
