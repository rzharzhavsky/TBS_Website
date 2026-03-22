/**
 * Not registered in `schemaTypes/index.ts` — embedded Sanity at /news-ticker is ticker-only.
 * Gallery is edited at /admin/gallery; this file documents the document shape for reference.
 */
import {defineField, defineType} from 'sanity'

export const galleryPhoto = defineType({
  name: 'galleryPhoto',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Photo Name',
      type: 'string',
      description: 'e.g. "Purim 2024" or "Broadway Shabbat"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Shabbat', value: 'Shabbat'},
          {title: 'Holidays', value: 'Holidays'},
          {title: 'Music', value: 'Music'},
          {title: 'Community', value: 'Community'},
        ],
      },
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'image'},
  },
})
