import {createGallerySessionValue} from '@/lib/gallery-auth'
import {
  clearGalleryAuthRateLimit,
  galleryAuthRateLimitStatus,
  getGalleryAuthClientIp,
  recordGalleryAuthFailure,
} from '@/lib/gallery-auth-rate-limit'

export async function POST(request: Request) {
  const clientIp = getGalleryAuthClientIp(request)
  const {blocked, retryAfterSec} = galleryAuthRateLimitStatus(clientIp)
  if (blocked) {
    return Response.json(
      {error: 'Too many attempts. Try again later.'},
      {
        status: 429,
        headers: {'Retry-After': String(retryAfterSec)},
      },
    )
  }

  const body = (await request.json()) as {password?: string}

  const adminPassword = process.env.GALLERY_ADMIN_PASSWORD
  if (!adminPassword) {
    return Response.json(
      {error: 'Gallery admin is not configured (missing GALLERY_ADMIN_PASSWORD).'},
      {status: 500},
    )
  }

  if (typeof body.password !== 'string' || body.password !== adminPassword) {
    recordGalleryAuthFailure(clientIp)
    return Response.json({error: 'Invalid password'}, {status: 401})
  }

  clearGalleryAuthRateLimit(clientIp)

  let token: string
  try {
    token = createGallerySessionValue()
  } catch {
    return Response.json({error: 'Server configuration error'}, {status: 500})
  }

  return Response.json({success: true, token})
}
