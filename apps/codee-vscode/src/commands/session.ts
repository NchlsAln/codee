import { EngineClient } from "../services/engine-client";
import { ChatController } from "../bridge/ChatController";

export async function startSessionCommand(engine: EngineClient, chatController: ChatController): Promise<void> {
  const session = await engine.startSession();
  chatController.setSession(session.sessionId);
}
