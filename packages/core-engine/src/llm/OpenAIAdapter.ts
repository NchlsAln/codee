import { fetch, Agent } from "undici";
import { TextDecoder } from "util";
import { BaseAdapter, LLMRequestContext, LLMStream } from "./BaseAdapter";
import { StreamChunk } from "../engine/types";
import { EngineError } from "../engine/errors";
import tls from "node:tls";

export class OpenAIAdapter extends BaseAdapter {
  readonly id = "openai";
  private endpoint = "https://api.openai.com";
  private pinnedCertificates: Record<string, string[]> = {};

  async initialize(): Promise<void> {
    return;
  }

  setEndpoint(endpoint: string): void {
    this.endpoint = endpoint;
  }

  setPinnedCertificates(pins: Record<string, string[]>): void {
    this.pinnedCertificates = pins;
  }

  async generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new EngineError("config", "OpenAI API key is missing.", "Set OPENAI_API_KEY in the environment.");
    }

    const body = {
      model: request.modelId,
      stream: true,
      temperature: request.temperature,
      messages: [
        { role: "system", content: request.systemPrompt },
        { role: "user", content: `${request.context}\n\n${request.userRequest.prompt}`.trim() }
      ]
    };

    const dispatcher = this.buildPinnedDispatcher();
    const response = await fetch(`${this.endpoint}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(body),
      signal,
      dispatcher
    });

    if (!response.ok) {
      const message = await response.text();
      throw new EngineError("network", `OpenAI request failed (${response.status}).`, message);
    }

    const bodyStream = response.body;
    if (!bodyStream) {
      throw new EngineError("network", "OpenAI response stream missing.", "Retry the request.");
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
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) {
            continue;
          }
          const payload = trimmed.replace(/^data:\s*/, "");
          if (payload === "[DONE]") {
            return;
          }
          const parsed = JSON.parse(payload) as {
            choices?: Array<{ delta?: { content?: string } }>;
          };
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            yield { type: "text", content };
          }
        }
      }
    }

    return { stream: stream() };
  }

  private buildPinnedDispatcher(): Agent | undefined {
    const url = new URL(this.endpoint);
    if (url.protocol !== "https:") {
      return undefined;
    }

    const pins = this.pinnedCertificates[url.hostname] ?? [];
    if (pins.length === 0) {
      throw new EngineError(
        "config",
        `Pinned certificates required for ${url.hostname}.`,
        "Set codee.core.pinnedCertificates for this host."
      );
    }

    const normalizedPins = pins.map((pin) => pin.replace(/:/g, "").toLowerCase());

    return new Agent({
      connect: {
        rejectUnauthorized: true,
        checkServerIdentity: (host, cert) => {
          const defaultError = tls.checkServerIdentity(host, cert);
          if (defaultError) {
            return defaultError;
          }
          const fingerprint = cert.fingerprint256?.replace(/:/g, "").toLowerCase();
          if (!fingerprint || !normalizedPins.includes(fingerprint)) {
            return new Error(`Certificate pin mismatch for ${host}.`);
          }
          return undefined;
        }
      }
    });
  }
}
