import { fetch, Response } from "undici";
import { TextDecoder } from "util";
import { BaseAdapter, LLMRequestContext, LLMStream } from "./BaseAdapter";
import { StreamChunk } from "../engine/types";
import { EngineError } from "../engine/errors";

export class OllamaAdapter extends BaseAdapter {
  readonly id = "ollama";
  private endpoint = "http://localhost:11434";

  async initialize(): Promise<void> {
    await this.listModels();
  }

  setEndpoint(endpoint: string): void {
    this.endpoint = endpoint;
  }

  async listModels(): Promise<string[]> {
    const response = await fetchWithRetry(`${this.endpoint}/api/tags`, { method: "GET" });
    if (!response.ok) {
      const message = await response.text();
      throw new EngineError("network", `Ollama unavailable (${response.status}).`, message);
    }
    const payload = (await response.json()) as { models?: Array<{ name: string }> };
    return payload.models?.map((model) => model.name) ?? [];
  }

  async generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream> {
    const prompt = buildPrompt(request.systemPrompt, request.context, request.userRequest.prompt);
    const body = {
      model: request.modelId,
      prompt,
      stream: true,
      options: {
        temperature: request.temperature
      }
    };

    const response = await fetchWithRetry(`${this.endpoint}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal
    });

    if (!response.ok) {
      const message = await response.text();
      if (response.status === 404 || message.toLowerCase().includes("model")) {
        throw new EngineError(
          "model",
          `Model ${request.modelId} is not available in Ollama.`,
          "Run `ollama pull <model>` or update the model setting."
        );
      }
      throw new EngineError("network", `Ollama request failed (${response.status}).`, message);
    }

    const bodyStream = response.body;
    if (!bodyStream) {
      throw new EngineError("network", "Ollama response stream missing.", "Restart the model server and retry.");
    }
    const reader = bodyStream.getReader();

    async function* stream(): AsyncIterable<StreamChunk> {
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        if (signal.aborted) {
          break;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.trim()) {
            continue;
          }
          const payload = JSON.parse(line) as { response?: string; done?: boolean; error?: string };
          if (payload.error) {
            throw new EngineError("model", payload.error, "Verify the model is available and running.");
          }
          if (payload.response) {
            yield { type: "text", content: payload.response };
          }
          if (payload.done) {
            return;
          }
        }
      }
    }

    return { stream: stream() };
  }
}

function buildPrompt(systemPrompt: string, context: string, userPrompt: string): string {
  return [systemPrompt, context, `User: ${userPrompt}`].filter((part) => part.trim().length > 0).join("\n\n");
}

async function fetchWithRetry(url: string, init: Parameters<typeof fetch>[1], attempts = 3): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fetch(url, init);
    } catch (error) {
      lastError = error;
      await sleep(400 * 2 ** attempt);
    }
  }
  throw lastError instanceof Error ? lastError : new EngineError("network", "Ollama request failed.");
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
