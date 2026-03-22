import {createClient} from 'next-sanity'
import {client} from './sanity'

const freshClient = createClient({
  projectId: 'eb9olt22',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export interface TickerItem {
  label: string
  text: string
  link?: string
}

export interface TickerData {
  enabled: boolean
  items: TickerItem[]
}

export interface GalleryPhoto {
  _id: string
  imageUrl: string
  category: string
}

export async function getTickerData(): Promise<TickerData | null> {
  return client.fetch(
    `*[_type == "tickerSettings"][0]{ enabled, items }`,
    {},
    {next: {revalidate: 300}},
  )
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const data = await freshClient.fetch<GalleryPhoto[]>(
    `*[_type == "galleryPhoto"] | order(_createdAt desc) { "_id": _id, "imageUrl": image.asset->url, category }`,
    {},
    {next: {revalidate: 60}},
  )
  return data ?? []
}
