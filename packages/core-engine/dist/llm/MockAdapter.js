"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAdapter = void 0;
const BaseAdapter_1 = require("./BaseAdapter");
class MockAdapter extends BaseAdapter_1.BaseAdapter {
    id = "mock";
    async initialize() {
        return;
    }
    async generate(request, signal) {
        async function* stream() {
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
exports.MockAdapter = MockAdapter;
