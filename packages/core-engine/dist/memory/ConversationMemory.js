"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationMemory = exports.ConversationSchema = void 0;
exports.ConversationSchema = {
    projects: "CREATE TABLE IF NOT EXISTS projects (id TEXT PRIMARY KEY, path TEXT, name TEXT, tech_stack TEXT, created_at INTEGER)",
    files: "CREATE TABLE IF NOT EXISTS files (id TEXT PRIMARY KEY, project_id TEXT, path TEXT, content_hash TEXT, embedding_id TEXT, last_indexed INTEGER)",
    conversations: "CREATE TABLE IF NOT EXISTS conversations (id TEXT PRIMARY KEY, project_id TEXT, title TEXT, created_at INTEGER, updated_at INTEGER)",
    messages: "CREATE TABLE IF NOT EXISTS messages (id TEXT PRIMARY KEY, conversation_id TEXT, role TEXT, content TEXT, tokens INTEGER, timestamp INTEGER)",
    codeSnippets: "CREATE TABLE IF NOT EXISTS code_snippets (id TEXT PRIMARY KEY, file_id TEXT, name TEXT, type TEXT, line_start INTEGER, line_end INTEGER, embedding BLOB)"
};
class ConversationMemory {
    conversations = [];
    messages = [];
    async initialize() {
        return;
    }
    loadSnapshot(snapshot) {
        this.conversations.length = 0;
        this.conversations.push(...snapshot.conversations);
        this.messages.length = 0;
        this.messages.push(...snapshot.messages);
    }
    exportSnapshot() {
        return {
            conversations: [...this.conversations],
            messages: [...this.messages]
        };
    }
    async createConversation(projectId, title) {
        const now = Date.now();
        const conversation = {
            id: `${projectId}-${now}`,
            projectId,
            title,
            createdAt: now,
            updatedAt: now
        };
        this.conversations.push(conversation);
        return conversation;
    }
    async addMessage(message) {
        this.messages.push(message);
        const conversation = this.conversations.find((entry) => entry.id === message.conversationId);
        if (conversation) {
            conversation.updatedAt = Date.now();
        }
    }
    updateConversation(conversation) {
        const index = this.conversations.findIndex((entry) => entry.id === conversation.id);
        if (index === -1) {
            this.conversations.push(conversation);
            return;
        }
        this.conversations[index] = conversation;
    }
    async listConversations(projectId) {
        return this.conversations.filter((conversation) => conversation.projectId === projectId);
    }
    async getMessages(conversationId) {
        return this.messages.filter((message) => message.conversationId === conversationId);
    }
    async exportConversation(conversationId) {
        const conversation = this.conversations.find((entry) => entry.id === conversationId);
        const messages = await this.getMessages(conversationId);
        return JSON.stringify({ conversation, messages }, null, 2);
    }
    async importConversation(payload) {
        const parsed = JSON.parse(payload);
        if (parsed.conversation) {
            this.conversations.push(parsed.conversation);
        }
        if (parsed.messages) {
            this.messages.push(...parsed.messages);
        }
    }
    async deleteProjectData(projectId) {
        const remaining = this.conversations.filter((conversation) => conversation.projectId !== projectId);
        const remainingMessages = this.messages.filter((message) => remaining.some((conversation) => conversation.id === message.conversationId));
        this.conversations.length = 0;
        this.conversations.push(...remaining);
        this.messages.length = 0;
        this.messages.push(...remainingMessages);
    }
    async vacuum(retentionDays = 90) {
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
exports.ConversationMemory = ConversationMemory;
