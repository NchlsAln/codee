"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIAdapter = void 0;
const undici_1 = require("undici");
const util_1 = require("util");
const BaseAdapter_1 = require("./BaseAdapter");
const errors_1 = require("../engine/errors");
const node_tls_1 = __importDefault(require("node:tls"));
class OpenAIAdapter extends BaseAdapter_1.BaseAdapter {
    id = "openai";
    endpoint = "https://api.openai.com";
    pinnedCertificates = {};
    async initialize() {
        return;
    }
    setEndpoint(endpoint) {
        this.endpoint = endpoint;
    }
    setPinnedCertificates(pins) {
        this.pinnedCertificates = pins;
    }
    async generate(request, signal) {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new errors_1.EngineError("config", "OpenAI API key is missing.", "Set OPENAI_API_KEY in the environment.");
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
        const response = await (0, undici_1.fetch)(`${this.endpoint}/v1/chat/completions`, {
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
            throw new errors_1.EngineError("network", `OpenAI request failed (${response.status}).`, message);
        }
        const bodyStream = response.body;
        if (!bodyStream) {
            throw new errors_1.EngineError("network", "OpenAI response stream missing.", "Retry the request.");
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
                    const parsed = JSON.parse(payload);
                    const content = parsed.choices?.[0]?.delta?.content;
                    if (content) {
                        yield { type: "text", content };
                    }
                }
            }
        }
        return { stream: stream() };
    }
    buildPinnedDispatcher() {
        const url = new URL(this.endpoint);
        if (url.protocol !== "https:") {
            return undefined;
        }
        const pins = this.pinnedCertificates[url.hostname] ?? [];
        if (pins.length === 0) {
            throw new errors_1.EngineError("config", `Pinned certificates required for ${url.hostname}.`, "Set codee.core.pinnedCertificates for this host.");
        }
        const normalizedPins = pins.map((pin) => pin.replace(/:/g, "").toLowerCase());
        return new undici_1.Agent({
            connect: {
                rejectUnauthorized: true,
                checkServerIdentity: (host, cert) => {
                    const defaultError = node_tls_1.default.checkServerIdentity(host, cert);
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
exports.OpenAIAdapter = OpenAIAdapter;
