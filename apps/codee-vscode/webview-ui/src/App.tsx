import React from "react";
import { ChatContainer } from "./components/ChatContainer";
import { ContextPills } from "./components/ContextPills";
import { ConversationList } from "./components/ConversationList";
import { SuggestionChips } from "./components/SuggestionChips";
import { InputArea } from "./components/InputArea";
import { PatternExplorer } from "./components/PatternExplorer";
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
        <div className="app-header-actions">
          <vscode-button
            appearance={chat.activeView === "pattern-explorer" ? "primary" : "secondary"}
            onClick={chat.openPatternExplorer}
          >
            Pattern Explorer
          </vscode-button>
          <vscode-button
            appearance={chat.activeView === "chat" ? "primary" : "secondary"}
            onClick={() => chat.setActiveView("chat")}
          >
            Chat
          </vscode-button>
          <vscode-button appearance="secondary" onClick={chat.openSettings} data-testid="settings-button">
            Settings
          </vscode-button>
        </div>
        <ContextPills
          tokenCount={chat.tokenCount}
          files={chat.contextFiles}
          onManage={chat.openContextManager}
        />
      </header>
      {chat.activeView === "pattern-explorer" ? (
        <PatternExplorer
          concepts={chat.patternConcepts}
          implementations={chat.patternImplementations}
          learningQueue={chat.learningQueue}
          selectedConceptId={chat.selectedConceptId}
          selectedFromLanguage={chat.selectedFromLanguage}
          selectedToLanguage={chat.selectedToLanguage}
          onSelectConcept={chat.setSelectedConceptId}
          onLearnPattern={chat.learnPattern}
          onFeedback={chat.sendTranslationFeedback}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
