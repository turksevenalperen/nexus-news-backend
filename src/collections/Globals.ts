
import { GlobalConfig } from 'payload'

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      label: 'Site Başlığı'
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Açıklama'
    },
    {
      name: 'themeColor',
      type: 'text',
      label: 'Tema Rengi'
    }
  ]
}

export default SiteSettings