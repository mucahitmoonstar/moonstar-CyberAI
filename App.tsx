import React, { useState, useEffect, useRef } from 'react';
import CodeEditor from './components/CodeEditor';
import ReportDisplay from './components/ReportDisplay';
import { analyzeCodeWithGemini } from './services/geminiService';
import { LANGUAGE_OPTIONS, LOADING_MESSAGES } from './constants';
import { AnalysisResult, LanguageCode } from './types';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('python');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [loadingState, setLoadingState] = useState<{ isLoading: boolean; message: string }>({
    isLoading: false,
    message: ''
  });

  const loadingIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (loadingState.isLoading) {
      let msgIndex = 0;
      setLoadingState(prev => ({ ...prev, message: LOADING_MESSAGES[0] }));
      
      loadingIntervalRef.current = window.setInterval(() => {
        msgIndex = (msgIndex + 1) % LOADING_MESSAGES.length;
        setLoadingState(prev => ({ ...prev, message: LOADING_MESSAGES[msgIndex] }));
      }, 800);
    } else {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    }
    return () => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, [loadingState.isLoading]);

  const handleAnalyze = async () => {
    if (!code.trim()) {
      alert("⚠️ Lütfen analiz için kod giriniz!");
      return;
    }

    setLoadingState({ isLoading: true, message: 'Başlatılıyor...' });
    setAnalysisResult(null);

    const minTimePromise = new Promise(resolve => setTimeout(resolve, 2500));
    const resultPromise = analyzeCodeWithGemini(code, selectedLang);

    const [result] = await Promise.all([resultPromise, minTimePromise]);

    setAnalysisResult(result);
    setLoadingState({ isLoading: false, message: '' });
  };

  const handleDownload = () => {
    if (!analysisResult?.data) return;
    
    const element = document.createElement("a");
    const file = new Blob([analysisResult.data], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = "moonstar_security_report.md";
    document.body.appendChild(element); 
    element.click();
    document.body.removeChild(element);
  };

  const handleNewScan = () => {
    setAnalysisResult(null);
    setCode('');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      
      {/* LEFT PANEL - Code Editor */}
      <div className="flex-1 flex flex-col border-r border-slate-800 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-800 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-50"></div>
              <div className="relative bg-slate-950 rounded-xl p-2 font-bold text-xl">
                🛡️
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                MoonStar CyberAI
              </h1>
              <p className="text-xs text-slate-500 mt-1">Advanced Code Security Analysis</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select 
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value as LanguageCode)}
              className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500 focus:border-cyan-500 transition-all cursor-pointer text-sm font-medium focus:outline-none backdrop-blur"
            >
              {LANGUAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-bold">ONLINE</span>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-900/30">
          <div className="flex-1 overflow-hidden">
            <CodeEditor 
              value={code} 
              onChange={setCode}
              placeholder={`// Kodunuzu buraya yapıştırın\n// Python, JavaScript, Java, C++, Go, Rust vb.\n\n`}
            />
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-sm">
                <span className="text-slate-400">Boyut:</span>
                <span className="text-cyan-400 font-bold ml-2">{code.length}</span>
                <span className="text-slate-500 ml-1">bytes</span>
              </div>
              
              {analysisResult && (
                <div className="ml-4 pl-4 border-l border-slate-700 text-sm">
                  <span className="text-slate-400">Sonuç:</span>
                  {analysisResult.success ? (
                    <span className="text-green-400 font-bold ml-2">✓ Başarılı</span>
                  ) : (
                    <span className="text-red-400 font-bold ml-2">✗ Hata</span>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCode('')}
                className="px-4 py-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-all text-sm font-medium"
              >
                🗑️ Temizle
              </button>

              <button
                onClick={handleAnalyze}
                disabled={loadingState.isLoading || !code.trim()}
                className={`px-8 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                  loadingState.isLoading || !code.trim()
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95'
                }`}
              >
                {loadingState.isLoading ? (
                  <>
                    <span className="animate-spin">⚙️</span>
                    {loadingState.message}
                  </>
                ) : (
                  <>
                    <span>🔍</span>
                    Analiz Et
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Results & Info */}
      <div className="w-96 flex flex-col bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur">
        
        {/* Results Header */}
        <div className="border-b border-slate-800 px-6 py-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>📊</span> Analiz Sonuçları
          </h2>
          <p className="text-xs text-slate-500 mt-2">Real-time code security analysis</p>
        </div>

        {/* Results Content */}
        <div className="flex-1 overflow-y-auto">
          {!loadingState.isLoading && !analysisResult && (
            <div className="p-6 space-y-6">
              
              {/* Features */}
              <div>
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">✨ Özellikler</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all cursor-default">
                    <span className="text-lg flex-shrink-0">🔐</span>
                    <div>
                      <p className="text-sm font-semibold">Güvenlik Taraması</p>
                      <p className="text-xs text-slate-500 mt-1">SQL Injection, XSS, Buffer Overflow</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all cursor-default">
                    <span className="text-lg flex-shrink-0">⚡</span>
                    <div>
                      <p className="text-sm font-semibold">Performans</p>
                      <p className="text-xs text-slate-500 mt-1">Algoritma optimizasyonu, memory leaks</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all cursor-default">
                    <span className="text-lg flex-shrink-0">🎯</span>
                    <div>
                      <p className="text-sm font-semibold">Best Practices</p>
                      <p className="text-xs text-slate-500 mt-1">Kod kalitesi ve standartlara uygunluk</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all cursor-default">
                    <span className="text-lg flex-shrink-0">🤖</span>
                    <div>
                      <p className="text-sm font-semibold">AI Powered</p>
                      <p className="text-xs text-slate-500 mt-1">Google Gemini 3 Pro Advanced Model</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">🔧 Sistem Durumu</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <span className="text-slate-400">API</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-bold">Aktif</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <span className="text-slate-400">Model</span>
                    <span className="text-cyan-400 font-bold">Gemini 3</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <span className="text-slate-400">Versiyon</span>
                    <span className="text-blue-400 font-bold">v1.2.0</span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-4">
                <h3 className="text-sm font-bold text-cyan-400 mb-2">💡 İpuçları</h3>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Kodunuzu yapıştırın ve dili seçin</li>
                  <li>"Analiz Et" butonuna tıklayın</li>
                  <li>Rapor otomatik olarak görünecek</li>
                  <li>Detayları indir ve paylaş</li>
                </ul>
              </div>
            </div>
          )}

          {loadingState.isLoading && (
            <div className="p-6 flex flex-col items-center justify-center h-full">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-slate-950 rounded-lg flex items-center justify-center text-3xl animate-spin">
                  ⚙️
                </div>
              </div>
              <p className="text-center text-slate-300 font-semibold">{loadingState.message}</p>
              <p className="text-xs text-slate-500 mt-2">Lütfen bekleyin...</p>
            </div>
          )}

          {analysisResult && !loadingState.isLoading && (
            <div className="p-6 space-y-4">
              {analysisResult.success ? (
                <>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <p className="text-green-400 font-bold flex items-center gap-2">
                      <span>✓</span> Analiz Başarılı
                    </p>
                    <p className="text-xs text-green-300 mt-2">
                      Detaylı rapor aşağıda görüntülenebilir
                    </p>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    📥 Raporu İndir
                  </button>

                  <button
                    onClick={handleNewScan}
                    className="w-full px-4 py-2 border border-slate-700 text-slate-300 hover:text-white rounded-lg font-bold text-sm transition-colors"
                  >
                    🔄 Yeni Tarama
                  </button>

                  <div className="border-t border-slate-700 pt-4">
                    <h3 className="text-sm font-bold text-slate-300 mb-3">📋 Rapor Önizleme</h3>
                    <div className="max-h-96 overflow-y-auto">
                      <ReportDisplay 
                        report={analysisResult.data || ""} 
                        onDownload={handleDownload}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-red-400 font-bold flex items-center gap-2">
                    <span>✗</span> Analiz Başarısız
                  </p>
                  <p className="text-xs text-red-300 mt-2">{analysisResult.error}</p>
                  <button
                    onClick={handleNewScan}
                    className="w-full mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-sm transition-colors"
                  >
                    Geri Dön
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
