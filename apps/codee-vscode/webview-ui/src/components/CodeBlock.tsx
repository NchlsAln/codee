import React, { useEffect, useState } from "react";
import { CodeBlockData, WebviewAction } from "../types";
import { highlightCode } from "../hooks/useTheme";

interface CodeBlockProps {
  block: CodeBlockData;
  onAction: (action: WebviewAction) => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ block, onAction }) => {
  const [html, setHtml] = useState<string>(escapeHtml(block.code));
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    let active = true;
    const schedule = window.requestIdleCallback
      ? window.requestIdleCallback
      : (callback: IdleRequestCallback) => window.setTimeout(() => callback({ didTimeout: true, timeRemaining: () => 0 }), 120);
    const cancel = window.cancelIdleCallback
      ? window.cancelIdleCallback
      : (id: number) => window.clearTimeout(id);

    const handle = schedule(() => {
      highlightCode(block.code, block.language).then((result) => {
        if (active) {
          setHtml(result);
        }
      });
    });
    return () => {
      active = false;
      cancel(handle as number);
    };
  }, [block.code, block.language]);

  const showDiff = Boolean(block.diff);

  return (
    <div className="code-block">
      <span className="code-badge">{block.language}</span>
      <div className="code-actions">
        <vscode-button appearance="secondary" onClick={() => onAction({ type: "copy", payload: { code: block.code } })}>
          Copy
        </vscode-button>
        <vscode-button appearance="secondary" onClick={() => onAction({ type: "insert", payload: { code: block.code } })}>
          Insert
        </vscode-button>
        <vscode-button appearance="secondary" onClick={() => onAction({ type: "newFile", payload: { code: block.code, language: block.language } })}>
          New File
        </vscode-button>
        <vscode-button appearance="secondary" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand" : "Collapse"}
        </vscode-button>
      </div>
      {!collapsed && !showDiff && <pre dangerouslySetInnerHTML={{ __html: html }} />}
      {!collapsed && showDiff && (
        <div className="code-diff">
          <pre>
            <strong>Before</strong>
            {block.diff?.before}
          </pre>
          <pre>
            <strong>After</strong>
            {block.diff?.after}
          </pre>
        </div>
      )}
    </div>
  );
};

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
