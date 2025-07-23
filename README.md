# Nexus News - Backend (Payload CMS)

Bu proje Nexus News haber portalının backend kısmıdır. Payload CMS kullanılarak geliştirilmiştir.

## 🏗️ Proje Mimarisi

Bu backend aşağıdaki collection'ları içerir:
- **Posts**: Haber yazıları (başlık, slug, yazar, kategori, içerik, SEO meta verileri)
- **Categories**: Haber kategorileri (isim, slug)
- **Authors**: Yazarlar (isim, avatar)
- **SiteSettings**: Site genel ayarları (başlık, açıklama, tema rengi)
- **Media**: Dosya yükleme ve yönetimi
- **Users**: Admin kullanıcıları

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- MongoDB veritabanı
- pnpm (önerilen) veya npm

### Adım 1: Environment Dosyası Oluşturma
```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin:
```env
DATABASE_URI=mongodb://127.0.0.1/nexus-news
PAYLOAD_SECRET=your-secret-key-here
```

### Adım 2: Bağımlılıkları Yükleme
```bash
pnpm install
```

### Adım 3: Geliştirme Sunucusunu Başlatma
```bash
pnpm dev
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

### Adım 4: İlk Admin Kullanıcısı Oluşturma
1. Tarayıcıda http://localhost:3000/admin adresine gidin
2. İlk admin kullanıcınızı oluşturun
3. Admin panelinden içerik eklemeye başlayın

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

## 🔧 Production Build

```bash
pnpm build
pnpm start
```

## 📞 Destek

Herhangi bir sorunla karşılaştığınızda:
- [Payload CMS Dokümantasyonu](https://payloadcms.com/docs)
- [GitHub Issues](https://github.com/payloadcms/payload/issues)

## 🏷️ Versiyon

- Payload CMS: 3.48.0
- Next.js: 15.3.2
- MongoDB: 5.0+
