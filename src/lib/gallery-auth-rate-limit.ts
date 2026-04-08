/**
 * In-memory rate limit for gallery admin login (failed attempts per IP).
 * Mitigates brute force; on multi-instance/serverless deploys, consider
 * Upstash Redis or similar for a shared store.
 */

const WINDOW_MS = 15 * 60 * 1000
/** Failed password attempts allowed per window before 429. */
const MAX_FAILED_ATTEMPTS = 5

type Entry = { count: number; resetAt: number }

const store = new Map<string, Entry>()

function getEntry(ip: string): Entry {
  const now = Date.now()
  let e = store.get(ip)
  if (!e || now >= e.resetAt) {
    e = { count: 0, resetAt: now + WINDOW_MS }
    store.set(ip, e)
  }
  return e
}

function pruneStale(now: number): void {
  if (store.size < 500) return
  for (const [ip, e] of store) {
    if (now > e.resetAt + WINDOW_MS) store.delete(ip)
  }
}

export function getGalleryAuthClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  const real = request.headers.get('x-real-ip')
  if (real) return real.trim()
  return 'unknown'
}

export function galleryAuthRateLimitStatus(ip: string): {
  blocked: boolean
  retryAfterSec: number
} {
  const now = Date.now()
  pruneStale(now)
  const e = store.get(ip)
  if (!e || now >= e.resetAt) {
    return { blocked: false, retryAfterSec: 0 }
  }
  if (e.count >= MAX_FAILED_ATTEMPTS) {
    return {
      blocked: true,
      retryAfterSec: Math.max(1, Math.ceil((e.resetAt - now) / 1000)),
    }
  }
  return { blocked: false, retryAfterSec: 0 }
}

export function recordGalleryAuthFailure(ip: string): void {
  const e = getEntry(ip)
  e.count += 1
  store.set(ip, e)
}

export function clearGalleryAuthRateLimit(ip: string): void {
  store.delete(ip)
}
