import React, { useMemo, useRef, useState, useCallback } from "react";
import { ChatMessage, WebviewAction } from "../types";
import { MessageItem } from "./MessageItem";

interface MessageListProps {
  messages: ChatMessage[];
  streaming: boolean;
  onAction: (action: WebviewAction) => void;
}

const ROW_HEIGHT = 120;

export const MessageList: React.FC<MessageListProps> = ({ messages, streaming, onAction }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    setScrollTop(container.scrollTop);
  }, []);

  const visible = useMemo(() => {
    const container = containerRef.current;
    if (!container) {
      return messages.map((message) => ({ message, top: 0 }));
    }

    const height = container.clientHeight;
    const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 4);
    const endIndex = Math.min(messages.length, startIndex + Math.ceil(height / ROW_HEIGHT) + 8);
    return messages.slice(startIndex, endIndex).map((message, index) => ({
      message,
      top: (startIndex + index) * ROW_HEIGHT
    }));
  }, [messages, scrollTop, streaming]);

  return (
    <div className="message-list" ref={containerRef} onScroll={handleScroll}>
      <div style={{ position: "relative", height: messages.length * ROW_HEIGHT }}>
        {visible.map(({ message, top }) => (
          <div key={message.id} style={{ position: "absolute", top, left: 0, right: 0 }}>
            <MessageItem message={message} onAction={onAction} />
          </div>
        ))}
      </div>
    </div>
  );
};
