import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTIONS } from "../constants";
import { LanguageCode, AnalysisResult } from "../types";

const getSystemPrompt = (langCode: LanguageCode): string => {
  return SYSTEM_INSTRUCTIONS[langCode] || SYSTEM_INSTRUCTIONS['default'];
};

export const analyzeCodeWithGemini = async (
  codeContent: string,
  langCode: LanguageCode
): Promise<AnalysisResult> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string;
    if (!apiKey) {
      throw new Error("API Anahtarı bulunamadı. .env.local dosyasını kontrol edin: VITE_GEMINI_API_KEY");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-3-pro-preview for deep analysis
    const modelId = "gemini-3-pro-preview";

    const expertPersona = getSystemPrompt(langCode);

    const fullPrompt = `
    ${expertPersona}
    
    GÖREVİN:
    Aşağıdaki kod bloğunu satır satır analiz et ve güvenlik açıklarını bul.
    
    RAPOR FORMATI (Markdown Olarak Ver):
    1. **📊 Yönetici Özeti**: 0-100 arası bir Güvenlik Skoru ver (Örnek: "Güvenlik Skoru: 85/100") ve genel durumu 1 cümleyle özetle.
    2. **🚨 Kritik Bulgular**: Varsa "Yüksek" riskli açıkları listele (Satır numarasıyla).
    3. **⚠️ Uyarılar**: Orta ve Düşük riskli bulgular.
    4. **🛠️ İyileştirme Önerisi**: Hatalı kod bloğunun "Güvenli" versiyonunu (Secure Code) yaz.
    
    --- ANALİZ EDİLECEK KOD ---
    ${codeContent}
    ---------------------------
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: fullPrompt,
      config: {
        temperature: 0.2,
        thinkingConfig: { thinkingBudget: 2048 }
      }
    });

    return {
      success: true,
      data: response.text || "Analiz oluşturulamadı.",
      timestamp: new Date().toISOString()
    };

  } catch (error: any) {
    console.error("Gemini Analysis Error:", error);
    return {
      success: false,
      error: error.message || "Bilinmeyen bir hata oluştu.",
      timestamp: new Date().toISOString()
    };
  }
};