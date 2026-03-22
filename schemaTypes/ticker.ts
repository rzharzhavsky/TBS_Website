import {defineField, defineType} from 'sanity'

export const tickerItem = defineType({
  name: 'tickerItem',
  title: 'Ticker Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Short category label, e.g. "Upcoming Events"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Message',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link (optional)',
      type: 'string',
      description: 'e.g. /events',
    }),
  ],
})

export const tickerSettings = defineType({
  name: 'tickerSettings',
  title: 'News Ticker',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Show Ticker',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'items',
      title: 'Ticker Items',
      type: 'array',
      of: [{type: 'tickerItem'}],
    }),
  ],
})
