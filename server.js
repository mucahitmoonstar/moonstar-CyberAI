import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

// CyberAI static dosyaları sunma
app.use(express.static(path.join(__dirname, 'dist')));

// Tüm istekleri index.html'ye yönlendir (SPA)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 CyberAI uygulaması http://localhost:${PORT} adresinde çalışıyor`);
  console.log(`🌐 Domain: cyberai.moonstar.technology`);
});
