import { BaseAdapter, LLMRequestContext, LLMStream } from "./BaseAdapter";
import { StreamChunk } from "../engine/types";

export class MockAdapter extends BaseAdapter {
  readonly id = "mock";

  async initialize(): Promise<void> {
    return;
  }

  async generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream> {
    async function* stream(): AsyncIterable<StreamChunk> {
      if (signal.aborted) {
        return;
      }
      const header = `Mock response for ${request.task}.`;
      const body = `\nPrompt: ${request.userRequest.prompt}\n`;
      const chunks = [header, body, "\nStatus: OK\n"];
      for (const chunk of chunks) {
        if (signal.aborted) {
          return;
        }
        yield { type: "text", content: chunk };
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
    }

    return { stream: stream() };
  }
}
