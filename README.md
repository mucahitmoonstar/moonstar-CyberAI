# 🛡️ MoonStar CyberAI

> **Advanced AI-Powered Code Security Analysis Platform**
> 
> Analyze your code for security vulnerabilities, performance issues, and best practices using Google Gemini 3 Pro

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🔐 **Security Analysis** - Detects SQL Injection, XSS, Buffer Overflow, and more
- ⚡ **Performance Optimization** - Identifies algorithmic inefficiencies and memory leaks
- 🎯 **Best Practices** - Evaluates code quality and adherence to standards
- �� **AI-Powered** - Leverages Google Gemini 3 Pro for advanced code understanding
- 📊 **Detailed Reports** - Generates comprehensive analysis with risk scores and recommendations
- 🎨 **Modern UI** - Full-screen split-panel design with real-time updates
- 💾 **Export** - Download analysis reports in Markdown format
- 🌐 **Multi-Language** - Supports Python, JavaScript, Java, C++, Go, Rust, PHP, and more

---

## 📸 Screenshot

![MoonStar CyberAI Interface](./assets/screenshot.png)

<img width="2553" height="1433" alt="image" src="https://github.com/user-attachments/assets/eb30819c-05b0-429b-a6df-4fc6a9c7243e" />


---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Google Gemini API Key (free or paid)
- Modern web browser

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mucahitmoonstar/moonstar-cyberai.git
cd moonstar-cyberai
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure API Key**

Create a `.env.local` file in the root directory:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your free API key: https://ai.google.dev/

4. **Start the development server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000`

---

## 🏗️ Project Structure

```
moonstar-cyberai/
├── src/
│   └── index.css          # Tailwind CSS configuration
├── components/
│   ├── CodeEditor.tsx     # Code input component
│   └── ReportDisplay.ts   # Analysis results display
├── services/
│   └── geminiService.ts   # Google Gemini API integration
├── App.tsx                # Main application component
├── index.html             # HTML template
├── index.tsx              # React entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── tailwind.config.js     # Tailwind CSS config
```

---

## 🔧 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Build Tool** | Vite 6 |
| **AI API** | Google Gemini 3 Pro |
| **Backend** | Node.js + Express |
| **Package Manager** | npm |

---

## 📋 Usage

### 1. Enter Code
Paste or type the code you want to analyze in the left panel.

### 2. Select Language
Choose the programming language from the dropdown menu in the top-right corner.

**Supported languages:**
- Python 🐍
- JavaScript / TypeScript
- Java ☕
- C++
- Go 🐹
- Rust 🦀
- PHP 🐘
- And 10+ more...

### 3. Analyze
Click the **"🔍 Analiz Et"** button to start the security analysis.

### 4. Review Results
The analysis report appears in the right panel with:
- Security vulnerabilities
- Performance recommendations
- Code quality metrics
- Risk scores
- Best practice suggestions

### 5. Download Report
Click **"📥 Raporu İndir"** to save the report as Markdown.

---

## 🔐 Security Analysis Includes

- **OWASP Top 10** vulnerability detection
- **Input Validation** issues
- **SQL Injection** risks
- **Cross-Site Scripting (XSS)**
- **Buffer Overflow** vulnerabilities
- **Memory Leaks**
- **Race Conditions**
- **Cryptographic Weaknesses**
- **Hard-coded Secrets**
- **Code Quality Issues**

---

## 🎨 UI/UX Features

### Split-Panel Layout
- **Left Panel (70%)**: Full-screen code editor with syntax highlighting
- **Right Panel (30%)**: Real-time analysis results and system status

### Interactive Elements
- Live character count
- Status indicators (API, Model, Version)
- Animated loading states
- Gradient button effects
- Smooth transitions and hover effects

### Modern Dark Theme
- Professional slate gradient background
- Cyan-Blue accent colors
- Glassmorphism UI effects
- High contrast for readability
- Responsive design

---

## 🌐 API Configuration

### Google Gemini API

The application uses **Google Gemini 3 Pro** for code analysis.

**Free Tier Limits:**
- 60 requests per minute
- 1,000 requests per day
- 10,000 input tokens per minute
- 30,000 input tokens per day

**Upgrade to Paid Plan** for unlimited usage:
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Set up billing
3. Get your API key
4. Update `.env.local`

---

## 📝 Environment Variables

```env
# Required
VITE_GEMINI_API_KEY=your_api_key_here

# Optional (built-in defaults)
# VITE_API_TIMEOUT=30000
# VITE_MAX_CODE_SIZE=50000
```

---

## 🚦 Rate Limiting

If you hit API rate limits:

1. **Free Tier**: Limits reset every 24 hours or upgrade to paid plan
2. **Paid Tier**: Implement custom rate limiting or contact Google Support

**Status Indicators:**
- 🟢 **Green**: API is available and responsive
- 🟡 **Yellow**: Approaching quota limit
- 🔴 **Red**: Quota exceeded, please wait or upgrade

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test your changes locally
- Update documentation accordingly

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**MoonStar Technology** - Advanced AI Security Solutions

- 🌐 Website: [moonstar.technology](https://moonstar.technology)
- 📧 Email: [contact@moonstar.technology](mailto:contact@moonstar.technology)
- 🐙 GitHub: [@mucahitmoonstar](https://github.com/mucahitmoonstar)

---

## 🙏 Acknowledgments

- [Google Gemini API](https://ai.google.dev/) - AI Engine
- [React](https://react.dev/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vite.dev/) - Build Tool
- [TypeScript](https://www.typescriptlang.org/) - Language

---

## 📞 Support

Need help? Here are the resources:

- 📖 **Documentation**: Check the [wiki](https://github.com/mucahitmoonstar/moonstar-cyberai/wiki)
- 🐛 **Bug Reports**: [Open an issue](https://github.com/mucahitmoonstar/moonstar-cyberai/issues)
- 💬 **Discussions**: [Start a discussion](https://github.com/mucahitmoonstar/moonstar-cyberai/discussions)
- 📧 **Email**: contact@moonstar.technology

---

## 🗺️ Roadmap

- [ ] Dark/Light theme toggle
- [ ] Code comparison feature
- [ ] Team collaboration (real-time)
- [ ] Custom security rules engine
- [ ] IDE integrations (VS Code, IntelliJ, Vim)
- [ ] CLI tool for command-line analysis
- [ ] Docker support
- [ ] Advanced metrics dashboard
- [ ] API rate limit monitoring
- [ ] Multi-language UI support
- [ ] GitHub integration
- [ ] CI/CD pipeline integration

---

## ⚖️ Disclaimer

This tool is designed to **assist** developers in identifying potential security issues. It is **not** a replacement for professional security audits or penetration testing. Always perform thorough security reviews with qualified security professionals before deploying to production.

---

## 🔄 Version History

**v1.2.0** (January 6, 2026)
- ✨ Complete UI redesign with full-screen split-panel layout
- 🔐 Enhanced security analysis capabilities
- 📊 Improved report formatting and readability
- 🎨 Modern dark theme with glassmorphism effects
- 🔧 Better error handling and user feedback
- 📱 Responsive design improvements
- 🐛 Bug fixes and optimizations

---

## 📊 Performance

- **Build Time**: ~4 seconds
- **Bundle Size**: ~470 KB (minified)
- **Gzip Size**: ~115 KB
- **Load Time**: <1 second
- **Time to Interactive**: <2 seconds

---

## 🔗 Related Projects

- [MoonStar Digital](https://github.com/mucahitmoonstar/digital.moonstar) - Main web platform
- [MoonStar API](https://github.com/mucahitmoonstar/moonstar-api) - Backend services

---

**Made with ❤️ by MoonStar Technology**

⭐ If you find this useful, please consider giving it a star!

---

*Last Updated: January 6, 2026*
