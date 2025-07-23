
// Authors Collection - Yazar bilgileri veri modeli

import { CollectionConfig } from 'payload'

const Authors: CollectionConfig = {
  slug: 'authors',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Yazar Adı'
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Profil Fotoğrafı'
    }
  ]
}

export default Authors