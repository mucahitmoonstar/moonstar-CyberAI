# CyberAI - Moonstar Teknoloji
## Bağımsız Proje Kurulumu

### 📦 Kurulum
```bash
cd /root/moonstar-cyberai
npm install
npm run build
npm start
```

### 🔑 API Anahtarı
Google Gemini API anahtarı `.env.local` dosyasında ayarlanmıştır.
```
VITE_GEMINI_API_KEY=AIzaSyAKcq6fInT6EQjvyUFbZhkCtWXo9Tzi_9U
```

### 🌐 Domain Yapılandırması
**cyberai.moonstar.technology** alanı bunu işaret etmesi için:

#### 1. DNS Ayarları (hosting sağlayıcısında)
```
A Record: cyberai.moonstar.technology → [YOUR_SERVER_IP]
```

#### 2. Nginx Reverse Proxy (opsiyonel - önerilir)
```nginx
server {
    server_name cyberai.moonstar.technology;
    listen 80;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 3. SSL Sertifikası (Let's Encrypt)
```bash
sudo certbot certonly --standalone -d cyberai.moonstar.technology
```

### 🚀 Sunucuyu Başlat
```bash
npm start
# veya PM2 ile kalıcı çalışması için:
pm2 start server.js --name cyberai
```

### 📂 Proje Yapısı
```
/root/moonstar-cyberai/
├── App.tsx           # Ana uygulama (Gemini AI entegrasyonu)
├── components/       # React bileşenleri
├── services/         # geminiService.ts
├── dist/             # Build çıktısı
├── server.js         # Express sunucusu
├── .env.local        # API anahtarı
└── package.json
```

### 🔗 Ayrı Proje
- **digital.moonstar/** → Ana Web Uygulaması
- **moonstar-cyberai/** → CyberAI (Bu Proje)

---
Oluşturma Tarihi: 6 Ocak 2026
