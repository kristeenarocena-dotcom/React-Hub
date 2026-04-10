import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CodePreview({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border border-line rounded-xl overflow-hidden font-mono">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-elevated">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-ink-faint">{language}</span>
        <button
          onClick={handleCopy}
          className="text-ink-faint flex items-center gap-1 text-xs px-1.5 py-0.5 rounded border border-line bg-transparent cursor-pointer transition-colors duration-150 hover:text-ink-dim"
        >
          {copied ? (
            <Check size={12} color="#22c55e" />
          ) : (
            <Copy size={12} />
          )}
        </button>
      </div>

      {/* Code body */}
      <pre className="px-5 py-4 overflow-x-auto text-[13px] leading-[1.7] text-[#a8b1c4] m-0">
        <code>{code}</code>
      </pre>
    </div>
  );
}
