import { randomUUID } from "crypto";
import { Session } from "./types";

export class SessionManager {
  private readonly sessions = new Map<string, Session>();

  createSession(projectPath?: string): Session {
    const now = Date.now();
    const session: Session = {
      id: randomUUID(),
      projectPath,
      createdAt: now,
      updatedAt: now
    };

    this.sessions.set(session.id, session);
    return session;
  }

  getSession(sessionId: string): Session | undefined {
    return this.sessions.get(sessionId);
  }

  updateSession(sessionId: string, update: Partial<Session>): Session | undefined {
    const current = this.sessions.get(sessionId);
    if (!current) {
      return undefined;
    }

    const updated: Session = { ...current, ...update, updatedAt: Date.now() };
    this.sessions.set(sessionId, updated);
    return updated;
  }
}
