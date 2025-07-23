# ⚙️ Nexus News - Backend (Payload CMS)

Bu proje, Payload CMS 3.48 kullanılarak geliştirilmiş headless CMS backend'idir. Modern haber portalı için tam özellikli API ve admin paneli sağlar.

## 🎯 Challenge Features (Tamamlandı)

- ✅ **Headless CMS Architecture** - Payload CMS ile modern API yaklaşımı
- ✅ **Custom Collections** - Posts, Categories, Authors, SiteSettings
- ✅ **Media Management** - File upload ve image optimization
- ✅ **Rich Text Editor** - Lexical editor ile zengin içerik editörü
- ✅ **Admin Panel** - Kullanıcı dostu yönetim arayüzü
- ✅ **SEO Fields** - Meta title, description alanları
- ✅ **Relationship Fields** - Posts ile Authors/Categories ilişkileri
- ✅ **Global Settings** - Site geneli ayarlar yönetimi

## 🌐 Canlı Demo

- **Admin Panel**: [https://nexus-news-backend.vercel.app/admin](https://nexus-news-backend.vercel.app/admin)
- **API Endpoint**: [https://nexus-news-backend.vercel.app/api](https://nexus-news-backend.vercel.app/api)

**Demo Admin Giriş:**
- Email: `turksevenalperen0@gmail.com`
- Password: `Asdasd06`

## 🏗️ Collection Architecture

### Posts Collection
- **Rich Content System** - Lexical editor ile profesyonel içerik editörü
- **SEO Optimization** - Meta title, description alanları
- **Author Relations** - Yazarlar ile ilişkili content
- **Category System** - Organize content management
- **Featured Posts** - Öne çıkan haber sistemi

### Categories Collection
- **Hierarchical Structure** - Kategori organizasyonu
- **URL-friendly Slugs** - SEO optimized slug generation

### Authors Collection  
- **Profile Management** - Yazar profil bilgileri
- **Media Relations** - Avatar upload sistemi

### SiteSettings Global
- **Centralized Config** - Site geneli ayarlar
- **Theme Management** - Global site configurations

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- MongoDB (Atlas ya da local)
- npm/pnpm

### Adım 1: Environment Variables
`.env` dosyası oluşturun:
```env
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/nexus-news
PAYLOAD_SECRET=your-32-character-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Adım 2: Bağımlılıkları Yükleyin
```bash
npm install
# veya
pnpm install
```

### Adım 3: MongoDB Atlas Setup (Önerilen)
1. [MongoDB Atlas](https://cloud.mongodb.com) hesabı oluşturun
2. Yeni cluster oluşturun (ücretsiz tier yeterli)
3. Database user oluşturun
4. Network Access'te IP whitelist: `0.0.0.0/0` (tüm IP'ler)
5. Connection string'i `.env` dosyasına ekleyin

### Adım 4: Backend'i Başlatın
```bash
npm run dev
```

Backend http://localhost:3000 adresinde çalışacak.

### Adım 5: İlk Admin Kullanıcısı
1. http://localhost:3000 → otomatik `/admin`'e yönlendir
2. İlk admin kullanıcısını oluşturun
3. Admin panelinden içerik eklemeye başlayın

### ⚠️ Önemli Not: Frontend Bağlantısı
Frontend'in bu backend'e bağlanabilmesi için frontend'te:
```env
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
```

## 📊 Veri Modelleri

### Posts Collection
- **title**: Haber başlığı (required)
- **slug**: URL dostu slug (required, unique)  
- **author**: Yazar referansı (required)
- **category**: Kategori referansı (required)
- **content**: Rich text içerik (required)
- **publishedDate**: Yayın tarihi (required)
- **featured**: Öne çıkan haber (boolean)
- **meta**: SEO meta verileri (group)
  - metaTitle: Meta başlık
  - metaDescription: Meta açıklama

### Categories Collection
- **name**: Kategori adı (required)
- **slug**: URL dostu slug (required, unique)

### Authors Collection  
- **name**: Yazar adı (required)
- **avatar**: Profil fotoğrafı (upload)

### SiteSettings Global
- **siteTitle**: Site başlığı (required)
- **description**: Site açıklaması
- **themeColor**: Tema rengi

## 🐳 Docker ile Çalıştırma (Opsiyonel)

Yerel MongoDB kurulumu yerine Docker kullanmayı tercih ediyorsanız:

### Adım 1: Environment Dosyasını Düzenleyin
```env
DATABASE_URI=mongodb://127.0.0.1/nexus-news
```

### Adım 2: Docker Compose'u Başlatın
```bash
docker-compose up -d
```

### Adım 3: Uygulamayı Başlatın
```bash
pnpm dev
```

## 📁 Proje Yapısı

```
nexus-news-backend/
├── src/
│   ├── collections/          # Payload collection tanımları
│   │   ├── Posts.ts         # Haber yazıları
│   │   ├── Categories.ts    # Kategoriler
│   │   ├── Authors.ts       # Yazarlar
│   │   ├── Media.ts         # Medya dosyaları
│   │   ├── Users.ts         # Kullanıcılar
│   │   └── Globals.ts       # Site ayarları
│   ├── app/                 # Next.js app directory
│   └── payload.config.ts    # Payload CMS konfigürasyonu
├── docker-compose.yml       # MongoDB Docker konfigürasyonu
└── package.json
```

## 🌐 API Endpoints

Backend çalıştığında aşağıdaki API endpoint'leri kullanılabilir:

- `GET /api/posts` - Tüm haberleri listele
- `GET /api/posts?where[slug][equals]=slug-name` - Slug ile haber getir
- `GET /api/categories` - Tüm kategorileri listele
- `GET /api/authors` - Tüm yazarları listele
- `GET /api/site-settings` - Site ayarlarını getir
- `GET /api/media` - Medya dosyalarını listele

## �️ Karşılaşılan Zorluklar ve Çözümler

### 1. **Payload CMS 3.0 Migration Challenge**
**Zorluk:** Payload CMS 3.0'ın yeni API yapısına adaptasyon
**Çözüm:**
- Yeni config structure'a uyum
- Collections yapısının modernizasyonu
- TypeScript type generation

### 2. **MongoDB Atlas Integration**
**Zorluk:** Cloud database bağlantısı ve production deployment
**Çözüm:**
- Atlas cluster setup ve connection string optimization
- Network Access IP whitelisting
- Environment variable management

### 3. **Vercel Deployment Challenges**
**Zorluk:** Serverless environment'ta Payload CMS deployment
**Çözüm:**
- Environment variables doğru konfigürasyonu
- MongoDB Atlas IP whitelist ayarları
- Build process optimization

### 4. **Custom Collections Design**
**Zorluk:** Haber sitesi ihtiyaçlarına göre collection design
**Çözüm:**
- Posts, Categories, Authors arası relationship kurulumu
- SEO fields (meta title, description) eklenmesi
- Rich text editor (Lexical) konfigürasyonu

### 5. **Media Management**
**Zorluk:** File upload ve image optimization
**Çözüm:**
- Payload media collection setup
- Image resize ve optimization
- Cloud storage integration hazırlığı

### 6. **Admin Panel UX**
**Zorluk:** Kullanıcı dostu admin arayüzü
**Çözüm:**
- Turkish label'lar
- Intuitive field grouping
- Auto-redirect to admin panel (localhost:3000 → /admin)

## 📱 Production Deployment

### Vercel Deployment
```bash
# Environment Variables (Vercel Dashboard):
DATABASE_URI=mongodb+srv://...
PAYLOAD_SECRET=32-character-secret
NEXT_PUBLIC_SERVER_URL=https://your-backend.vercel.app
```

### Build Process
```bash
npm run build
npm run start
```

## 📈 Performance & Security

- **Serverless Architecture** - Vercel Functions ile ölçeklenebilir
- **MongoDB Atlas** - Cloud database ile yüksek erişilebilirlik
- **Secret Management** - Environment variables ile güvenli config
- **IP Whitelisting** - MongoDB Atlas network security
