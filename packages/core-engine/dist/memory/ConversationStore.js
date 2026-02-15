"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationStore = void 0;
const crypto_1 = require("crypto");
const promises_1 = require("fs/promises");
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const sqlite3 = __importStar(require("@journeyapps/sqlcipher"));
const errors_1 = require("../engine/errors");
const ConversationMemory_1 = require("./ConversationMemory");
const SESSION_TABLE = "CREATE TABLE IF NOT EXISTS session_map (session_id TEXT PRIMARY KEY, conversation_id TEXT)";
class ConversationStore {
    projectPath;
    memory = new ConversationMemory_1.ConversationMemory();
    sessionMap = new Map();
    storagePath;
    dbPath;
    db;
    dbReady;
    retentionDays = 90;
    constructor(projectPath) {
        this.projectPath = projectPath;
        const basePath = projectPath ?? path_1.default.join(os_1.default.homedir(), "codee");
        this.storagePath = path_1.default.join(basePath, ".codee", "conversations.json");
        this.dbPath = path_1.default.join(basePath, ".codee", "conversations.db");
    }
    getMemory() {
        return this.memory;
    }
    async setProjectPath(projectPath) {
        const basePath = projectPath ?? path_1.default.join(os_1.default.homedir(), "codee");
        this.storagePath = path_1.default.join(basePath, ".codee", "conversations.json");
        this.dbPath = path_1.default.join(basePath, ".codee", "conversations.db");
        await this.load();
    }
    setRetentionDays(days) {
        this.retentionDays = Math.max(0, Math.floor(days));
    }
    async initialize() {
        await this.memory.initialize();
        await this.load();
    }
    async persistSession(session) {
        const projectId = session.projectPath ?? "global";
        const title = `Session ${session.id}`;
        const conversation = await this.ensureConversation(projectId, title, session.id);
        session.conversationId = conversation.id;
        await this.saveSessionMap(session.id, conversation.id);
    }
    async addMessage(sessionId, role, content) {
        const conversationId = this.sessionMap.get(sessionId);
        if (!conversationId) {
            return;
        }
        const message = {
            id: (0, crypto_1.randomUUID)(),
            conversationId,
            role,
            content,
            tokens: Math.ceil(content.length / 4),
            timestamp: Date.now()
        };
        await this.memory.addMessage(message);
        await this.saveMessage(message);
    }
    getConversationId(sessionId) {
        return this.sessionMap.get(sessionId);
    }
    async getMessages(sessionId) {
        const conversationId = this.sessionMap.get(sessionId);
        if (!conversationId) {
            return [];
        }
        return this.memory.getMessages(conversationId);
    }
    async listConversations(projectId) {
        return this.memory.listConversations(projectId);
    }
    async deleteProjectData(projectId) {
        await this.loadDatabase();
        const conversations = await this.memory.listConversations(projectId);
        for (const conversation of conversations) {
            await this.run("DELETE FROM messages WHERE conversation_id = ?", [conversation.id]);
            await this.run("DELETE FROM conversations WHERE id = ?", [conversation.id]);
        }
        await this.run("DELETE FROM session_map WHERE conversation_id NOT IN (SELECT id FROM conversations)");
        await this.memory.deleteProjectData(projectId);
    }
    async clearStorage() {
        await this.closeDatabase();
        await secureDeleteFile(this.dbPath);
        await secureDeleteFile(`${this.dbPath}-wal`);
        await secureDeleteFile(`${this.dbPath}-shm`);
        await secureDeleteFile(this.storagePath);
        this.sessionMap.clear();
        this.memory.loadSnapshot({ conversations: [], messages: [] });
    }
    async ensureConversation(projectId, title, sessionId) {
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
    async load() {
        await this.loadDatabase();
        await this.loadSnapshotFromDatabase();
        await this.migrateLegacyJson();
    }
    async loadDatabase() {
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
    async openDatabase() {
        const key = process.env.CODEE_DB_KEY;
        if (!key) {
            throw new errors_1.EngineError("config", "Local database key missing.", "Restart Codee to generate an encryption key.");
        }
        await (0, promises_1.mkdir)(path_1.default.dirname(this.dbPath), { recursive: true });
        this.db = new sqlite3.Database(this.dbPath);
        await this.run("PRAGMA key = ?", [key]);
        await this.run("PRAGMA cipher_memory_security = ON");
        await this.run("PRAGMA journal_mode = WAL");
        await this.run(ConversationMemory_1.ConversationSchema.projects);
        await this.run(ConversationMemory_1.ConversationSchema.conversations);
        await this.run(ConversationMemory_1.ConversationSchema.messages);
        await this.run(SESSION_TABLE);
    }
    async loadSnapshotFromDatabase() {
        const conversations = await this.all("SELECT id, project_id as projectId, title, created_at as createdAt, updated_at as updatedAt FROM conversations", []);
        const messages = await this.all("SELECT id, conversation_id as conversationId, role, content, tokens, timestamp FROM messages", []);
        const sessionRows = await this.all("SELECT session_id as sessionId, conversation_id as conversationId FROM session_map", []);
        this.memory.loadSnapshot({
            conversations,
            messages
        });
        this.sessionMap.clear();
        sessionRows.forEach((row) => this.sessionMap.set(row.sessionId, row.conversationId));
    }
    async migrateLegacyJson() {
        try {
            await (0, promises_1.access)(this.storagePath);
        }
        catch {
            return;
        }
        try {
            const raw = await (0, promises_1.readFile)(this.storagePath, "utf-8");
            const parsed = JSON.parse(raw);
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
        }
        catch {
            return;
        }
    }
    async saveConversation(conversation) {
        await this.run("INSERT OR REPLACE INTO conversations (id, project_id, title, created_at, updated_at) VALUES (?, ?, ?, ?, ?)", [conversation.id, conversation.projectId, conversation.title, conversation.createdAt, conversation.updatedAt]);
    }
    async saveMessage(message) {
        await this.loadDatabase();
        await this.run("INSERT OR REPLACE INTO messages (id, conversation_id, role, content, tokens, timestamp) VALUES (?, ?, ?, ?, ?, ?)", [
            message.id,
            message.conversationId,
            message.role,
            message.content,
            message.tokens,
            message.timestamp
        ]);
        await this.run("UPDATE conversations SET updated_at = ? WHERE id = ?", [Date.now(), message.conversationId]);
        await this.pruneDatabase();
    }
    async saveSessionMap(sessionId, conversationId) {
        await this.loadDatabase();
        await this.run("INSERT OR REPLACE INTO session_map (session_id, conversation_id) VALUES (?, ?)", [sessionId, conversationId]);
    }
    async pruneDatabase() {
        if (this.retentionDays <= 0) {
            return;
        }
        const cutoff = Date.now() - this.retentionDays * 24 * 60 * 60 * 1000;
        await this.run("DELETE FROM conversations WHERE updated_at < ?", [cutoff]);
        await this.run("DELETE FROM messages WHERE conversation_id NOT IN (SELECT id FROM conversations)");
        await this.run("DELETE FROM session_map WHERE conversation_id NOT IN (SELECT id FROM conversations)");
    }
    async run(sql, params = []) {
        await this.loadDatabase();
        if (!this.db) {
            return;
        }
        await new Promise((resolve, reject) => {
            this.db?.run(sql, params, (error) => (error ? reject(error) : resolve()));
        });
    }
    async all(sql, params) {
        await this.loadDatabase();
        if (!this.db) {
            return [];
        }
        return new Promise((resolve, reject) => {
            this.db?.all(sql, params, (error, rows) => (error ? reject(error) : resolve(rows)));
        });
    }
    async closeDatabase() {
        if (!this.db) {
            return;
        }
        await new Promise((resolve, reject) => {
            this.db?.close((error) => (error ? reject(error) : resolve()));
        });
        this.db = undefined;
        this.dbReady = undefined;
    }
}
exports.ConversationStore = ConversationStore;
async function secureDeleteFile(filePath) {
    try {
        const stats = await (0, promises_1.stat)(filePath);
        const handle = await (0, promises_1.open)(filePath, "r+");
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
        await (0, promises_1.rm)(filePath, { force: true });
    }
    catch {
        return;
    }
}
