import {createClient} from 'next-sanity'

export const writeClient = createClient({
  projectId: 'eb9olt22',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})
