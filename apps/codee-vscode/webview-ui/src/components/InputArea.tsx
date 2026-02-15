import React, { useCallback, useEffect, useRef } from "react";
import { ChatAttachment } from "../types";
import { ContextFile } from "../protocol";

interface InputAreaProps {
  value: string;
  attachments: ChatAttachment[];
  isStreaming: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
  onStop: () => void;
  mentionSuggestions: ContextFile[];
  onMentionSelect: (item: ContextFile) => void;
}

export const InputArea: React.FC<InputAreaProps> = ({
  value,
  attachments,
  isStreaming,
  onChange,
  onSend,
  onStop,
  mentionSuggestions,
  onMentionSelect
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  }, [value]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        onSend();
      }
    },
    [onSend]
  );

  return (
    <div className="input-area">
      <div className="input-row">
        <textarea
          ref={textareaRef}
          className="input-textarea"
          placeholder="Ask Codee... Use @ for files, # for symbols"
          data-testid="chat-input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          onDragOver={(event) => event.preventDefault()}
        />
        {isStreaming ? (
          <vscode-button className="stop-button" onClick={onStop} data-testid="stop-button">
            Stop
          </vscode-button>
        ) : (
          <vscode-button onClick={onSend} data-testid="send-button">
            Send
          </vscode-button>
        )}
      </div>
      {mentionSuggestions.length > 0 && (
        <div className="mention-menu">
          {mentionSuggestions.map((item) => (
            <button
              key={`${item.kind}-${item.path}-${item.label}`}
              className="mention-item"
              data-testid="mention-item"
              onClick={() => onMentionSelect(item)}
            >
              <span className="mention-icon">{item.kind === "file" ? "[F]" : "[S]"}</span>
              <span className="mention-label">{item.label}</span>
              {item.detail && <span className="mention-detail">{item.detail}</span>}
            </button>
          ))}
        </div>
      )}
      {attachments.length > 0 && (
        <div className="context-pills">
          {attachments.map((file) => (
            <span key={file.id} className="context-pill">
              {file.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
