"use client";
import { Copy } from "lucide-react";
import { useState } from "react";

const CodeExample = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white font-medium">{title}</h4>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-2 py-1 text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeExample;
