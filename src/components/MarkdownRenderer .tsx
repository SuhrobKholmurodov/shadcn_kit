import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => (
  <ReactMarkdown
    components={{
      code({
        inline,
        className,
        children,
        ...props
      }: {
        inline?: boolean;
        className?: string;
        children?: React.ReactNode;
      }) {
        const match = /language-(\w+)/.exec(className || '');
        const codeString = String(children).replace(/\n$/, '');

        if (!inline && match) {
          return (
            <div className="relative group">
              <CopyButton text={codeString} />
              <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          );
        }

        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 hover:cursor-pointer right-2 bg-gray-700 text-white px-2 py-2 text-sm rounded opacity-0 group-hover:opacity-100 transition"
    >
      <div className="relative w-5 h-5">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            copied ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Copy size={20} />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            copied ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Check className="text-green-500" size={20} />
        </div>
      </div>
    </button>
  );
};
