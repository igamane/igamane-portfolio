"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  children: string | undefined | null;
  className?: string;
};

export default function Markdown({ children, className = "" }: Props) {
  if (!children) return null;

  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-3" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
          p:  ({ node, ...props }) => <p className="text-white leading-relaxed my-3" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 my-3" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 my-3" {...props} />,
           li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
          a:  ({ node, ...props }) => <a className="text-purple hover:underline" target="_blank" rel="noreferrer" {...props} />,
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4 border border-white/10 rounded-xl">
              <table className="min-w-full text-left" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => <th className="px-4 py-2 bg-white/5 border-b border-white/10 font-semibold" {...props} />,
          td: ({ node, ...props }) => <td className="px-4 py-2 border-b border-white/10 align-top" {...props} />,
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            if (inline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-white text-sm" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <div className="my-4 overflow-hidden rounded-xl border border-white/10">
                <SyntaxHighlighter language={match?.[1] || "text"} PreTag="div">
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
