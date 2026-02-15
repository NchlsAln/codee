import React from "react";
import { ChatMessage, WebviewAction } from "../types";
import { CodeBlock } from "./CodeBlock";

interface MessageItemProps {
  message: ChatMessage;
  onAction: (action: WebviewAction) => void;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message, onAction }) => {
  const { content, blocks } = extractCodeBlocks(message.content);

  return (
    <article className={`message-item ${message.role}`}>
      <div className="message-header">
        <span>{message.role.toUpperCase()}</span>
        {message.status && <span>{message.status}</span>}
      </div>
      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
      {blocks.map((block) => (
        <CodeBlock key={block.id} block={block} onAction={onAction} />
      ))}
      {message.attachments && message.attachments.length > 0 && (
        <div className="message-attachments">
          {message.attachments.map((file) => (
            <span key={file.id} className="context-pill">
              {file.name}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

function renderMarkdown(source: string): string {
  const escaped = source
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\n/g, "<br />");
}

function extractCodeBlocks(source: string): { content: string; blocks: ChatMessage["codeBlocks"] } {
  const blocks: NonNullable<ChatMessage["codeBlocks"]> = [];
  let remaining = source;
  let index = 0;

  while (true) {
    const start = remaining.indexOf("```");
    if (start === -1) {
      break;
    }
    const end = remaining.indexOf("```", start + 3);
    if (end === -1) {
      break;
    }

    const before = remaining.slice(0, start);
    const fenced = remaining.slice(start + 3, end).trim();
    const [firstLine, ...rest] = fenced.split("\n");
    const language = firstLine.trim() || "text";
    const code = rest.join("\n");

    blocks.push({
      id: `${Date.now()}-${index}`,
      language,
      code
    });

    remaining = `${before}\n${remaining.slice(end + 3)}`;
    index += 1;
  }

  return { content: remaining, blocks };
}
