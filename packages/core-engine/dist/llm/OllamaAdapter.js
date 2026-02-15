"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OllamaAdapter = void 0;
const undici_1 = require("undici");
const util_1 = require("util");
const BaseAdapter_1 = require("./BaseAdapter");
const errors_1 = require("../engine/errors");
class OllamaAdapter extends BaseAdapter_1.BaseAdapter {
    id = "ollama";
    endpoint = "http://localhost:11434";
    async initialize() {
        await this.listModels();
    }
    setEndpoint(endpoint) {
        this.endpoint = endpoint;
    }
    async listModels() {
        const response = await fetchWithRetry(`${this.endpoint}/api/tags`, { method: "GET" });
        if (!response.ok) {
            const message = await response.text();
            throw new errors_1.EngineError("network", `Ollama unavailable (${response.status}).`, message);
        }
        const payload = (await response.json());
        return payload.models?.map((model) => model.name) ?? [];
    }
    async generate(request, signal) {
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
                throw new errors_1.EngineError("model", `Model ${request.modelId} is not available in Ollama.`, "Run `ollama pull <model>` or update the model setting.");
            }
            throw new errors_1.EngineError("network", `Ollama request failed (${response.status}).`, message);
        }
        const bodyStream = response.body;
        if (!bodyStream) {
            throw new errors_1.EngineError("network", "Ollama response stream missing.", "Restart the model server and retry.");
        }
        const reader = bodyStream.getReader();
        async function* stream() {
            const decoder = new util_1.TextDecoder();
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
                    const payload = JSON.parse(line);
                    if (payload.error) {
                        throw new errors_1.EngineError("model", payload.error, "Verify the model is available and running.");
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
exports.OllamaAdapter = OllamaAdapter;
function buildPrompt(systemPrompt, context, userPrompt) {
    return [systemPrompt, context, `User: ${userPrompt}`].filter((part) => part.trim().length > 0).join("\n\n");
}
async function fetchWithRetry(url, init, attempts = 3) {
    let lastError;
    for (let attempt = 0; attempt < attempts; attempt += 1) {
        try {
            return await (0, undici_1.fetch)(url, init);
        }
        catch (error) {
            lastError = error;
            await sleep(400 * 2 ** attempt);
        }
    }
    throw lastError instanceof Error ? lastError : new errors_1.EngineError("network", "Ollama request failed.");
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
