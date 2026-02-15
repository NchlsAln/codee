import React from "react";
import { ChatMessage, WebviewAction } from "../types";
import { MessageList } from "./MessageList";

interface ChatContainerProps {
  messages: ChatMessage[];
  streaming: boolean;
  onAction: (action: WebviewAction) => void;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ messages, streaming, onAction }) => {
  return (
    <section className="chat-container">
      {streaming && <div className="streaming-indicator">Generating response...</div>}
      <MessageList messages={messages} streaming={streaming} onAction={onAction} />
    </section>
  );
};
