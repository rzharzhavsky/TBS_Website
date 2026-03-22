import {createGallerySessionValue} from '@/lib/gallery-auth'

export async function POST(request: Request) {
  const body = (await request.json()) as {password?: string}

  const adminPassword = process.env.GALLERY_ADMIN_PASSWORD
  if (!adminPassword) {
    return Response.json(
      {error: 'Gallery admin is not configured (missing GALLERY_ADMIN_PASSWORD).'},
      {status: 500},
    )
  }

  if (typeof body.password !== 'string' || body.password !== adminPassword) {
    return Response.json({error: 'Invalid password'}, {status: 401})
  }

  let token: string
  try {
    token = createGallerySessionValue()
  } catch {
    return Response.json({error: 'Server configuration error'}, {status: 500})
  }

  return Response.json({success: true, token})
}
