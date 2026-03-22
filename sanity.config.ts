import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'News ticker',

  projectId: 'eb9olt22',
  dataset: 'production',

  basePath: '/news-ticker',

  releases: {
    enabled: false,
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
