import {writeClient} from '@/lib/sanity-write'
import {client} from '@/lib/sanity'
import {getGalleryBearerToken, verifyGallerySessionValue} from '@/lib/gallery-auth'

function unauthorized() {
  return Response.json({error: 'Unauthorized'}, {status: 401})
}

function assertGalleryAuth(request: Request): boolean {
  const token = getGalleryBearerToken(request)
  return verifyGallerySessionValue(token)
}

export async function GET(request: Request) {
  if (!assertGalleryAuth(request)) return unauthorized()
  const photos = await client.fetch(
    `*[_type == "galleryPhoto"] | order(_createdAt desc) { _id, title, "imageUrl": image.asset->url, category }`,
  )
  return Response.json(photos)
}

export async function POST(request: Request) {
  if (!assertGalleryAuth(request)) return unauthorized()
  const token = process.env.SANITY_WRITE_TOKEN
  if (!token) {
    return Response.json({error: 'Server not configured for writes'}, {status: 500})
  }

  const formData = await request.formData()
  const file = formData.get('file') as File | null
  const title = formData.get('title') as string
  const category = formData.get('category') as string

  if (!file || !title) {
    return Response.json({error: 'Photo and name are required'}, {status: 400})
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer())
    const asset = await writeClient.assets.upload('image', buffer, {
      filename: file.name,
      contentType: file.type,
    })

    const doc = await writeClient.create({
      _type: 'galleryPhoto',
      title,
      category: category || 'Community',
      image: {
        _type: 'image',
        asset: {_type: 'reference', _ref: asset._id},
      },
    })

    return Response.json({success: true, id: doc._id})
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Upload failed'
    console.error('Gallery upload error:', err)
    return Response.json({error: message}, {status: 500})
  }
}

export async function DELETE(request: Request) {
  if (!assertGalleryAuth(request)) return unauthorized()
  const token = process.env.SANITY_WRITE_TOKEN
  if (!token) {
    return Response.json({error: 'Server not configured for writes'}, {status: 500})
  }

  const {id} = await request.json()
  if (!id) {
    return Response.json({error: 'Document ID required'}, {status: 400})
  }

  await writeClient.delete(id)
  return Response.json({success: true})
}
