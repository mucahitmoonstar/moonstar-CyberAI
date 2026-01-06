export interface AnalysisResult {
  success: boolean;
  data?: string;
  error?: string;
  timestamp: string;
}

export type LanguageCode = 'python' | 'cpp' | 'web' | 'default';

export interface LanguageOption {
  label: string;
  value: LanguageCode;
  extension: string;
}

export interface LoadingState {
  isLoading: boolean;
  message: string;
}