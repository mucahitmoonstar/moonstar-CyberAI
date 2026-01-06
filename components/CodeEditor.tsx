import React from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full h-full flex flex-col shadow-2xl">
      <div className="bg-cyber-panel border-t border-x border-cyber-border rounded-t-md px-4 py-2 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-cyber-red"></div>
        <div className="w-3 h-3 rounded-full bg-cyber-orange"></div>
        <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
        <span className="ml-4 text-xs text-gray-500 font-mono">source_code.lock</span>
      </div>
      <textarea
        className="w-full h-96 p-4 bg-cyber-input text-cyber-inputText font-mono text-sm border-b border-x border-cyber-border rounded-b-md focus:outline-none focus:border-cyber-green focus:shadow-neon-green transition-all duration-300 resize-none placeholder-gray-600 leading-relaxed"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
      />
    </div>
  );
};

export default CodeEditor;