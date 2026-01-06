import { LanguageOption } from './types';

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { label: "Python (.py)", value: "python", extension: "py" },
  { label: "C/C++ (.cpp)", value: "cpp", extension: "cpp" },
  { label: "Web (.js/.php)", value: "web", extension: "js" },
  { label: "Diğer / Plaintext", value: "default", extension: "txt" }
];

export const SYSTEM_INSTRUCTIONS = {
  python: `
  ROL: Kıdemli Python Güvenlik Denetçisi (Bandit & PyLint Uzmanı).
  ODAK: Deserialization (Pickle), SQL Injection (ORM bypass), Hardcoded Secrets, Command Injection.
  `,
  cpp: `
  ROL: Kıdemli Gömülü Sistemler ve C++ Güvenlik Mühendisi.
  ODAK: Buffer Overflow, Memory Leaks, Dangling Pointers, Use-After-Free, Integer Overflow.
  STANDART: MISRA C++ ve CERT C kuralları.
  `,
  web: `
  ROL: Web Uygulama Güvenlik Analisti (Penetration Tester).
  ODAK: OWASP Top 10 (XSS, CSRF, SQLi, IDOR), Güvensiz Cookie ayarları, Header eksiklikleri.
  `,
  default: `
  ROL: Genel Yazılım Güvenliği Uzmanı.
  ODAK: Kod kalitesi, mantık hataları ve genel güvenlik prensipleri.
  `
};

export const LOADING_MESSAGES = [
  "Veri şifreleniyor...",
  "Yapay Zeka motoruna bağlanılıyor...",
  "OWASP veritabanı ile karşılaştırılıyor...",
  "Kontrol akışı analiz ediliyor...",
  "Güvenlik matrisi oluşturuluyor..."
];