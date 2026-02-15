export interface ConversationMessage {
  id: string;
  conversationId: string;
  role: "user" | "assistant" | "system";
  content: string;
  tokens: number;
  timestamp: number;
  parentId?: string;
}

export interface ConversationThread {
  id: string;
  projectId: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

export interface ProjectRecord {
  id: string;
  path: string;
  name: string;
  techStack: string;
  createdAt: number;
}

export const ConversationSchema = {
  projects: "CREATE TABLE IF NOT EXISTS projects (id TEXT PRIMARY KEY, path TEXT, name TEXT, tech_stack TEXT, created_at INTEGER)",
  files: "CREATE TABLE IF NOT EXISTS files (id TEXT PRIMARY KEY, project_id TEXT, path TEXT, content_hash TEXT, embedding_id TEXT, last_indexed INTEGER)",
  conversations:
    "CREATE TABLE IF NOT EXISTS conversations (id TEXT PRIMARY KEY, project_id TEXT, title TEXT, created_at INTEGER, updated_at INTEGER)",
  messages:
    "CREATE TABLE IF NOT EXISTS messages (id TEXT PRIMARY KEY, conversation_id TEXT, role TEXT, content TEXT, tokens INTEGER, timestamp INTEGER)",
  codeSnippets:
    "CREATE TABLE IF NOT EXISTS code_snippets (id TEXT PRIMARY KEY, file_id TEXT, name TEXT, type TEXT, line_start INTEGER, line_end INTEGER, embedding BLOB)"
};

export class ConversationMemory {
  private readonly conversations: ConversationThread[] = [];
  private readonly messages: ConversationMessage[] = [];

  async initialize(): Promise<void> {
    return;
  }

  loadSnapshot(snapshot: { conversations: ConversationThread[]; messages: ConversationMessage[] }): void {
    this.conversations.length = 0;
    this.conversations.push(...snapshot.conversations);
    this.messages.length = 0;
    this.messages.push(...snapshot.messages);
  }

  exportSnapshot(): { conversations: ConversationThread[]; messages: ConversationMessage[] } {
    return {
      conversations: [...this.conversations],
      messages: [...this.messages]
    };
  }

  async createConversation(projectId: string, title: string): Promise<ConversationThread> {
    const now = Date.now();
    const conversation: ConversationThread = {
      id: `${projectId}-${now}`,
      projectId,
      title,
      createdAt: now,
      updatedAt: now
    };
    this.conversations.push(conversation);
    return conversation;
  }

  async addMessage(message: ConversationMessage): Promise<void> {
    this.messages.push(message);
    const conversation = this.conversations.find((entry) => entry.id === message.conversationId);
    if (conversation) {
      conversation.updatedAt = Date.now();
    }
  }

  updateConversation(conversation: ConversationThread): void {
    const index = this.conversations.findIndex((entry) => entry.id === conversation.id);
    if (index === -1) {
      this.conversations.push(conversation);
      return;
    }
    this.conversations[index] = conversation;
  }

  async listConversations(projectId: string): Promise<ConversationThread[]> {
    return this.conversations.filter((conversation) => conversation.projectId === projectId);
  }

  async getMessages(conversationId: string): Promise<ConversationMessage[]> {
    return this.messages.filter((message) => message.conversationId === conversationId);
  }

  async exportConversation(conversationId: string): Promise<string> {
    const conversation = this.conversations.find((entry) => entry.id === conversationId);
    const messages = await this.getMessages(conversationId);
    return JSON.stringify({ conversation, messages }, null, 2);
  }

  async importConversation(payload: string): Promise<void> {
    const parsed = JSON.parse(payload) as { conversation?: ConversationThread; messages?: ConversationMessage[] };
    if (parsed.conversation) {
      this.conversations.push(parsed.conversation);
    }
    if (parsed.messages) {
      this.messages.push(...parsed.messages);
    }
  }

  async deleteProjectData(projectId: string): Promise<void> {
    const remaining = this.conversations.filter((conversation) => conversation.projectId !== projectId);
    const remainingMessages = this.messages.filter((message) =>
      remaining.some((conversation) => conversation.id === message.conversationId)
    );
    this.conversations.length = 0;
    this.conversations.push(...remaining);
    this.messages.length = 0;
    this.messages.push(...remainingMessages);
  }

  async vacuum(retentionDays = 90): Promise<void> {
    const cutoff = Date.now() - 1000 * 60 * 60 * 24 * retentionDays;
    const recentConversations = this.conversations.filter((conversation) => conversation.updatedAt >= cutoff);
    const recentConversationIds = new Set(recentConversations.map((conversation) => conversation.id));
    const recentMessages = this.messages.filter((message) => recentConversationIds.has(message.conversationId));
    this.conversations.length = 0;
    this.conversations.push(...recentConversations);
    this.messages.length = 0;
    this.messages.push(...recentMessages);
  }
}