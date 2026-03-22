import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'eb9olt22',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
