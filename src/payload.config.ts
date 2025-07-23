// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
// Collection'ımızı import ediyoruz
import Posts from './collections/Posts'
import Categories from './collections/Categories'
import Authors from './collections/Authors'
import SiteSettings from './collections/Globals' 

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  
  // Collection'ları buraya ekliyoruz
  collections: [
    Users, 
    Media, 
    {
      ...Posts,
      access: {
        read: () => true, // Public read access
      }
    },
    {
      ...Categories,
      access: {
        read: () => true, // Public read access
      }
    },
    {
      ...Authors,
      access: {
        read: () => true, // Public read access
      }
    }
  ],
  globals: [
    {
      ...SiteSettings,
      access: {
        read: () => true, // Public read access
      }
    }
  ],
  
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  
  // MongoDB bağlantısı
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '', // Senin env adın
  }),
  
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})