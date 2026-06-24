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

/** Draw centered text, wrapping on word boundaries. Returns the y past the block. */
function drawWrapped(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  y: number,
  maxW: number,
  lineH: number,
): number {
  const words = text.split(/\s+/)
  let line = ''
  let cy = y
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (ctx.measureText(next).width > maxW && line) {
      ctx.fillText(line, cx, cy)
      line = word
      cy += lineH
    } else {
      line = next
    }
  }
  if (line) {
    ctx.fillText(line, cx, cy)
    cy += lineH
  }
  return cy
}

function setLetterSpacing(ctx: CanvasRenderingContext2D, value: string) {
  // Not in older typings / browsers — guarded so it degrades gracefully.
  try {
    ;(ctx as unknown as { letterSpacing: string }).letterSpacing = value
  } catch {
    /* unsupported — ignore */
  }
}

/** Render the shareable story image for a single card. */
export async function renderCardImage(
  card: Card,
  lang: Lang,
  labels: ShareLabels,
): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('canvas 2d context unavailable')

  // Background — match the app's dark foxfire gradient.
  ctx.fillStyle = '#0a0712'
  ctx.fillRect(0, 0, W, H)
  const glow = ctx.createRadialGradient(W / 2, H * 0.34, 0, W / 2, H * 0.34, H * 0.7)
  glow.addColorStop(0, '#1c1030')
  glow.addColorStop(0.6, '#0a0712')
  glow.addColorStop(1, '#080610')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, W, H)

  ctx.textAlign = 'center'

  // Brand wordmark — the game name.
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

  // Card image.
  const img = await loadImage(cardImageUrl(card))
  const cardW = 560
  const cardH = Math.round((cardW * 1433) / 800)
  const cardX = (W - cardW) / 2
  const cardY = 286

  ctx.save()
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)'
  ctx.shadowBlur = 60
  ctx.shadowOffsetY = 24
  roundRect(ctx, cardX, cardY, cardW, cardH, 28)
  ctx.fillStyle = '#000'
  ctx.fill()
  ctx.restore()

  ctx.save()
  roundRect(ctx, cardX, cardY, cardW, cardH, 28)
  ctx.clip()
  ctx.drawImage(img, cardX, cardY, cardW, cardH)
  ctx.restore()

  // Gold frame around the card.
  ctx.save()
  roundRect(ctx, cardX, cardY, cardW, cardH, 28)
  ctx.strokeStyle = 'rgba(232, 161, 58, 0.55)'
  ctx.lineWidth = 3
  ctx.stroke()
  ctx.restore()

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

  // Footer.
  ctx.fillStyle = '#b9a9d6'
  ctx.font = `400 24px ${SANS}`
  setLetterSpacing(ctx, '3px')
  ctx.globalAlpha = 0.75
  ctx.fillText(labels.madeBy, W / 2, H - 84)
  ctx.globalAlpha = 1
  setLetterSpacing(ctx, '0px')

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('canvas.toBlob returned null'))),
      'image/png',
    )
  })
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

/** Render and share a single card. Uses the native share sheet, falls back to download. */
export async function shareCard(
  card: Card,
  lang: Lang,
  labels: ShareLabels,
  shareText: string,
): Promise<ShareResult> {
  const blob = await renderCardImage(card, lang, labels)
  const file = new File([blob], `kitsunebi-${card.id}.png`, { type: 'image/png' })

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
  a.download = file.name
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
  return 'downloaded'
}
