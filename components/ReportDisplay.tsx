import React, { useMemo } from 'react';

interface ReportDisplayProps {
  report: string;
  onDownload: () => void;
}

const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, onDownload }) => {
  
  // Heuristic to determine risk level based on the "Score" in the text
  const riskLevel = useMemo(() => {
    // Look for patterns like "Güvenlik Skoru: 45", "Score: 45/100", "45/100"
    const scoreMatch = report.match(/(\d{1,3})\/100/);
    if (scoreMatch && scoreMatch[1]) {
      const score = parseInt(scoreMatch[1], 10);
      if (score < 50) return 'high'; // Red
      if (score < 80) return 'medium'; // Orange
      return 'low'; // Green
    }
    return 'medium'; // Default
  }, [report]);

  const borderColorClass = {
    high: 'border-l-cyber-red shadow-[0_4px_6px_rgba(255,0,51,0.2)]',
    medium: 'border-l-cyber-orange shadow-[0_4px_6px_rgba(255,165,0,0.2)]',
    low: 'border-l-cyber-green shadow-[0_4px_6px_rgba(0,255,65,0.2)]'
  }[riskLevel];

  return (
    <div className="mt-8 animate-fade-in">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-xl font-bold text-cyber-text flex items-center">
          <span className="mr-2">📋</span> Analiz Raporu
        </h3>
        <button
          onClick={onDownload}
          className="bg-cyber-panel border border-cyber-border text-cyber-green hover:bg-cyber-green hover:text-black hover:shadow-neon-glow px-4 py-2 rounded text-sm font-bold uppercase transition-all duration-300"
        >
          📥 Raporu İndir
        </button>
      </div>

      <div className={`bg-cyber-panel p-6 rounded-lg border-l-[6px] ${borderColorClass} overflow-x-auto transition-all duration-500`}>
        {/* 
          Using whitespace-pre-wrap to preserve formatting from Gemini 
        */}
        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-cyber-green prose-code:text-cyber-inputText prose-pre:bg-black prose-pre:border prose-pre:border-cyber-border max-w-none font-mono whitespace-pre-wrap leading-relaxed">
          {report}
        </div>
      </div>
      
      <div className="mt-2 text-right">
        <span className="text-xs text-gray-500">© 2026 MoonStar Technology - Designed by Mücahit Ayyıldız</span>
      </div>
    </div>
  );
};

export default ReportDisplay;