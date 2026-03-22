import {createHmac, timingSafeEqual} from 'crypto'

const MAX_AGE_SEC = 60 * 60 * 24 * 7 // 7 days

/** Reads `Authorization: Bearer <token>` from a request. */
export function getGalleryBearerToken(request: Request): string | undefined {
  const auth = request.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) return undefined
  const token = auth.slice(7).trim()
  return token || undefined
}

function getSigningSecret(): string {
  return process.env.GALLERY_SESSION_SECRET || process.env.GALLERY_ADMIN_PASSWORD || ''
}

export function createGallerySessionValue(): string {
  const secret = getSigningSecret()
  if (!secret) throw new Error('GALLERY_ADMIN_PASSWORD is not set')
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SEC
  const payloadB64 = Buffer.from(JSON.stringify({exp})).toString('base64url')
  const sig = createHmac('sha256', secret).update(payloadB64).digest('base64url')
  return `${payloadB64}.${sig}`
}

export function verifyGallerySessionValue(value: string | undefined): boolean {
  if (!value) return false
  const secret = getSigningSecret()
  if (!secret) return false
  const parts = value.split('.')
  if (parts.length !== 2) return false
  const [payloadB64, sig] = parts
  try {
    const expected = createHmac('sha256', secret).update(payloadB64).digest('base64url')
    const a = Buffer.from(expected)
    const b = Buffer.from(sig)
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString()) as {exp: number}
    if (typeof payload.exp !== 'number' || payload.exp < Math.floor(Date.now() / 1000)) return false
    return true
  } catch {
    return false
  }
}
