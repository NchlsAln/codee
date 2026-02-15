import { Session } from "./types";
export declare class SessionManager {
    private readonly sessions;
    createSession(projectPath?: string): Session;
    getSession(sessionId: string): Session | undefined;
    updateSession(sessionId: string, update: Partial<Session>): Session | undefined;
}
