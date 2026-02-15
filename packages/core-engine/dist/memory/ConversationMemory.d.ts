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
export declare const ConversationSchema: {
    projects: string;
    files: string;
    conversations: string;
    messages: string;
    codeSnippets: string;
};
export declare class ConversationMemory {
    private readonly conversations;
    private readonly messages;
    initialize(): Promise<void>;
    loadSnapshot(snapshot: {
        conversations: ConversationThread[];
        messages: ConversationMessage[];
    }): void;
    exportSnapshot(): {
        conversations: ConversationThread[];
        messages: ConversationMessage[];
    };
    createConversation(projectId: string, title: string): Promise<ConversationThread>;
    addMessage(message: ConversationMessage): Promise<void>;
    updateConversation(conversation: ConversationThread): void;
    listConversations(projectId: string): Promise<ConversationThread[]>;
    getMessages(conversationId: string): Promise<ConversationMessage[]>;
    exportConversation(conversationId: string): Promise<string>;
    importConversation(payload: string): Promise<void>;
    deleteProjectData(projectId: string): Promise<void>;
    vacuum(retentionDays?: number): Promise<void>;
}
