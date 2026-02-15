"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManager = void 0;
const crypto_1 = require("crypto");
class SessionManager {
    sessions = new Map();
    createSession(projectPath) {
        const now = Date.now();
        const session = {
            id: (0, crypto_1.randomUUID)(),
            projectPath,
            createdAt: now,
            updatedAt: now
        };
        this.sessions.set(session.id, session);
        return session;
    }
    getSession(sessionId) {
        return this.sessions.get(sessionId);
    }
    updateSession(sessionId, update) {
        const current = this.sessions.get(sessionId);
        if (!current) {
            return undefined;
        }
        const updated = { ...current, ...update, updatedAt: Date.now() };
        this.sessions.set(sessionId, updated);
        return updated;
    }
}
exports.SessionManager = SessionManager;
