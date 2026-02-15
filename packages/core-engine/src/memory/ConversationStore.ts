import { randomUUID } from "crypto";
import { access, mkdir, readFile, rm, stat, open } from "fs/promises";
import os from "os";
import path from "path";
import * as sqlite3 from "@journeyapps/sqlcipher";
import { Session } from "../engine/types";
import { EngineError } from "../engine/errors";
import { ConversationMemory, ConversationMessage, ConversationSchema, ConversationThread } from "./ConversationMemory";

type SqlDatabase = {
  run: (sql: string, params?: unknown[], callback?: (error: Error | null) => void) => void;
  all: (sql: string, params: unknown[], callback: (error: Error | null, rows: unknown[]) => void) => void;
  get: (sql: string, params: unknown[], callback: (error: Error | null, row: unknown) => void) => void;
  close: (callback?: (error: Error | null) => void) => void;
};

const SESSION_TABLE =
  "CREATE TABLE IF NOT EXISTS session_map (session_id TEXT PRIMARY KEY, conversation_id TEXT)";

export class ConversationStore {
  private readonly memory = new ConversationMemory();
  private readonly sessionMap = new Map<string, string>();
  private storagePath: string;
  private dbPath: string;
  private db?: SqlDatabase;
  private dbReady?: Promise<void>;
  private retentionDays = 90;

  constructor(private readonly projectPath?: string) {
    const basePath = projectPath ?? path.join(os.homedir(), "codee");
    this.storagePath = path.join(basePath, ".codee", "conversations.json");
    this.dbPath = path.join(basePath, ".codee", "conversations.db");
  }

  getMemory(): ConversationMemory {
    return this.memory;
  }

  async setProjectPath(projectPath?: string): Promise<void> {
    const basePath = projectPath ?? path.join(os.homedir(), "codee");
    this.storagePath = path.join(basePath, ".codee", "conversations.json");
    this.dbPath = path.join(basePath, ".codee", "conversations.db");
    await this.load();
  }

  setRetentionDays(days: number): void {
    this.retentionDays = Math.max(0, Math.floor(days));
  }

  async initialize(): Promise<void> {
    await this.memory.initialize();
    await this.load();
  }

  async persistSession(session: Session): Promise<void> {
    const projectId = session.projectPath ?? "global";
    const title = `Session ${session.id}`;
    const conversation = await this.ensureConversation(projectId, title, session.id);
    session.conversationId = conversation.id;
    await this.saveSessionMap(session.id, conversation.id);
  }

  async addMessage(sessionId: string, role: ConversationMessage["role"], content: string): Promise<void> {
    const conversationId = this.sessionMap.get(sessionId);
    if (!conversationId) {
      return;
    }
    const message: ConversationMessage = {
      id: randomUUID(),
      conversationId,
      role,
      content,
      tokens: Math.ceil(content.length / 4),
      timestamp: Date.now()
    };
    await this.memory.addMessage(message);
    await this.saveMessage(message);
  }

  getConversationId(sessionId: string): string | undefined {
    return this.sessionMap.get(sessionId);
  }

  async getMessages(sessionId: string): Promise<ConversationMessage[]> {
    const conversationId = this.sessionMap.get(sessionId);
    if (!conversationId) {
      return [];
    }
    return this.memory.getMessages(conversationId);
  }

  async listConversations(projectId: string): Promise<ConversationThread[]> {
    return this.memory.listConversations(projectId);
  }

  async deleteProjectData(projectId: string): Promise<void> {
    await this.loadDatabase();
    const conversations = await this.memory.listConversations(projectId);
    for (const conversation of conversations) {
      await this.run("DELETE FROM messages WHERE conversation_id = ?", [conversation.id]);
      await this.run("DELETE FROM conversations WHERE id = ?", [conversation.id]);
    }
    await this.run("DELETE FROM session_map WHERE conversation_id NOT IN (SELECT id FROM conversations)");
    await this.memory.deleteProjectData(projectId);
  }

  async clearStorage(): Promise<void> {
    await this.closeDatabase();
    await secureDeleteFile(this.dbPath);
    await secureDeleteFile(`${this.dbPath}-wal`);
    await secureDeleteFile(`${this.dbPath}-shm`);
    await secureDeleteFile(this.storagePath);
    this.sessionMap.clear();
    this.memory.loadSnapshot({ conversations: [], messages: [] });
  }

  private async ensureConversation(projectId: string, title: string, sessionId: string): Promise<ConversationThread> {
    const existingId = this.sessionMap.get(sessionId);
    if (existingId) {
      const conversations = await this.memory.listConversations(projectId);
      const existing = conversations.find((entry) => entry.id === existingId);
      if (existing) {
        return existing;
      }
    }

    const conversation = await this.memory.createConversation(projectId, title);
    this.memory.updateConversation(conversation);
    await this.saveConversation(conversation);
    this.sessionMap.set(sessionId, conversation.id);
    return conversation;
  }

  private async load(): Promise<void> {
    await this.loadDatabase();
    await this.loadSnapshotFromDatabase();
    await this.migrateLegacyJson();
  }

  private async loadDatabase(): Promise<void> {
    if (this.dbReady) {
      return this.dbReady;
    }
    if (process.env.CODEE_DISABLE_DB === "1") {
      this.dbReady = Promise.resolve();
      return this.dbReady;
    }
    this.dbReady = this.openDatabase();
    return this.dbReady;
  }

  private async openDatabase(): Promise<void> {
    const key = process.env.CODEE_DB_KEY;
    if (!key) {
      throw new EngineError(
        "config",
        "Local database key missing.",
        "Restart Codee to generate an encryption key."
      );
    }

    await mkdir(path.dirname(this.dbPath), { recursive: true });
    this.db = new sqlite3.Database(this.dbPath) as SqlDatabase;

    await this.run("PRAGMA key = ?", [key]);
    await this.run("PRAGMA cipher_memory_security = ON");
    await this.run("PRAGMA journal_mode = WAL");

    await this.run(ConversationSchema.projects);
    await this.run(ConversationSchema.conversations);
    await this.run(ConversationSchema.messages);
    await this.run(SESSION_TABLE);
  }

  private async loadSnapshotFromDatabase(): Promise<void> {
    const conversations = await this.all<ConversationThread>(
      "SELECT id, project_id as projectId, title, created_at as createdAt, updated_at as updatedAt FROM conversations",
      []
    );
    const messages = await this.all<ConversationMessage>(
      "SELECT id, conversation_id as conversationId, role, content, tokens, timestamp FROM messages",
      []
    );
    const sessionRows = await this.all<{ sessionId: string; conversationId: string }>(
      "SELECT session_id as sessionId, conversation_id as conversationId FROM session_map",
      []
    );

    this.memory.loadSnapshot({
      conversations,
      messages
    });
    this.sessionMap.clear();
    sessionRows.forEach((row) => this.sessionMap.set(row.sessionId, row.conversationId));
  }

  private async migrateLegacyJson(): Promise<void> {
    try {
      await access(this.storagePath);
    } catch {
      return;
    }

    try {
      const raw = await readFile(this.storagePath, "utf-8");
      const parsed = JSON.parse(raw) as {
        conversations?: ConversationThread[];
        messages?: ConversationMessage[];
        sessionMap?: Record<string, string>;
      };

      const conversations = parsed.conversations ?? [];
      const messages = parsed.messages ?? [];
      for (const conversation of conversations) {
        await this.saveConversation(conversation);
      }
      for (const message of messages) {
        await this.saveMessage(message);
      }

      if (parsed.sessionMap) {
        for (const [sessionId, conversationId] of Object.entries(parsed.sessionMap)) {
          await this.saveSessionMap(sessionId, conversationId);
        }
      }

      await secureDeleteFile(this.storagePath);
    } catch {
      return;
    }
  }

  private async saveConversation(conversation: ConversationThread): Promise<void> {
    await this.run(
      "INSERT OR REPLACE INTO conversations (id, project_id, title, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
      [conversation.id, conversation.projectId, conversation.title, conversation.createdAt, conversation.updatedAt]
    );
  }

  private async saveMessage(message: ConversationMessage): Promise<void> {
    await this.loadDatabase();
    await this.run(
      "INSERT OR REPLACE INTO messages (id, conversation_id, role, content, tokens, timestamp) VALUES (?, ?, ?, ?, ?, ?)",
      [
        message.id,
        message.conversationId,
        message.role,
        message.content,
        message.tokens,
        message.timestamp
      ]
    );
    await this.run(
      "UPDATE conversations SET updated_at = ? WHERE id = ?",
      [Date.now(), message.conversationId]
    );
    await this.pruneDatabase();
  }

  private async saveSessionMap(sessionId: string, conversationId: string): Promise<void> {
    await this.loadDatabase();
    await this.run(
      "INSERT OR REPLACE INTO session_map (session_id, conversation_id) VALUES (?, ?)",
      [sessionId, conversationId]
    );
  }

  private async pruneDatabase(): Promise<void> {
    if (this.retentionDays <= 0) {
      return;
    }
    const cutoff = Date.now() - this.retentionDays * 24 * 60 * 60 * 1000;
    await this.run("DELETE FROM conversations WHERE updated_at < ?", [cutoff]);
    await this.run("DELETE FROM messages WHERE conversation_id NOT IN (SELECT id FROM conversations)");
    await this.run("DELETE FROM session_map WHERE conversation_id NOT IN (SELECT id FROM conversations)");
  }

  private async run(sql: string, params: unknown[] = []): Promise<void> {
    await this.loadDatabase();
    if (!this.db) {
      return;
    }
    await new Promise<void>((resolve, reject) => {
      this.db?.run(sql, params, (error) => (error ? reject(error) : resolve()));
    });
  }

  private async all<T = unknown>(sql: string, params: unknown[]): Promise<T[]> {
    await this.loadDatabase();
    if (!this.db) {
      return [];
    }
    return new Promise<T[]>((resolve, reject) => {
      this.db?.all(sql, params, (error, rows) => (error ? reject(error) : resolve(rows as T[])));
    });
  }

  private async closeDatabase(): Promise<void> {
    if (!this.db) {
      return;
    }
    await new Promise<void>((resolve, reject) => {
      this.db?.close((error) => (error ? reject(error) : resolve()));
    });
    this.db = undefined;
    this.dbReady = undefined;
  }
}

async function secureDeleteFile(filePath: string): Promise<void> {
  try {
    const stats = await stat(filePath);
    const handle = await open(filePath, "r+");
    const zeroBuffer = Buffer.alloc(1024, 0);
    let remaining = stats.size;
    let offset = 0;
    while (remaining > 0) {
      const chunk = Math.min(remaining, zeroBuffer.length);
      await handle.write(zeroBuffer, 0, chunk, offset);
      remaining -= chunk;
      offset += chunk;
    }
    await handle.close();
    await rm(filePath, { force: true });
  } catch {
    return;
  }
}
