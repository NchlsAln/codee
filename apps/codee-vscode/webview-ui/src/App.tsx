import React from "react";
import { ChatContainer } from "./components/ChatContainer";
import { ContextPills } from "./components/ContextPills";
import { ConversationList } from "./components/ConversationList";
import { SuggestionChips } from "./components/SuggestionChips";
import { InputArea } from "./components/InputArea";
import { useChat } from "./hooks/useChat";
import { useTheme } from "./hooks/useTheme";

export const App: React.FC = () => {
  const chat = useChat();
  useTheme();

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">
          Codee <span className="beta-badge">BETA</span>
        </h1>
        <vscode-button appearance="secondary" onClick={chat.openSettings} data-testid="settings-button">
          Settings
        </vscode-button>
        <ContextPills
          tokenCount={chat.tokenCount}
          files={chat.contextFiles}
          onManage={chat.openContextManager}
        />
      </header>
      <ConversationList
        conversations={chat.conversations}
        onLoad={chat.loadConversation}
        onDelete={chat.deleteConversation}
      />
      <SuggestionChips suggestions={chat.suggestions} onSelect={chat.sendSuggestion} />
      <ChatContainer messages={chat.messages} streaming={chat.streaming} onAction={chat.handleAction} />
      <InputArea
        value={chat.input}
        attachments={chat.attachments}
        isStreaming={chat.streaming}
        onChange={chat.setInput}
        onSend={chat.sendMessage}
        onStop={chat.stopStreaming}
        mentionSuggestions={chat.mentionSuggestions}
        onMentionSelect={chat.selectMention}
      />
    </div>
  );
};
