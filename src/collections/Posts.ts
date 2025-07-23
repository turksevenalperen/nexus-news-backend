// Posts Collection - Haber yazıları veri modeli

import { CollectionConfig } from 'payload'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Başlık'
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug'
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
      label: 'Yazar'
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Kategori'
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'İçerik'
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Yayın Tarihi',
      defaultValue: () => new Date()
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Öne Çıkan Haber',
      defaultValue: false
    },
    {
      name: 'meta',
      label: 'SEO Meta Bilgisi',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title' },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description' }
      ]
    }
  ]
}

export default Posts