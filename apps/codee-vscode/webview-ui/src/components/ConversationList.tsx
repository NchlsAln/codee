import React from "react";
import { ConversationSummary } from "../protocol";

interface ConversationListProps {
  conversations: ConversationSummary[];
  onLoad: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({ conversations, onLoad, onDelete }) => {
  if (conversations.length === 0) {
    return <div className="conversation-empty">No conversations yet.</div>;
  }

  return (
    <div className="conversation-list">
      {conversations.map((conversation) => (
        <div key={conversation.id} className="conversation-item">
          <div className="conversation-main">
            <span className="conversation-title">{conversation.title}</span>
            {conversation.lastMessage && (
              <span className="conversation-preview">{conversation.lastMessage}</span>
            )}
          </div>
          <div className="conversation-actions">
            <vscode-button appearance="secondary" onClick={() => onLoad(conversation.id)}>
              Load
            </vscode-button>
            <vscode-button appearance="secondary" onClick={() => onDelete(conversation.id)}>
              Delete
            </vscode-button>
          </div>
        </div>
      ))}
    </div>
  );
};
