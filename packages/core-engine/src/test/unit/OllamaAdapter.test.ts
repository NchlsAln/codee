import http from "node:http";
import { OllamaAdapter } from "../../llm/OllamaAdapter";
import { LLMRequestContext } from "../../llm/BaseAdapter";

function startMockOllama(): Promise<{ url: string; close: () => Promise<void> }> {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      if (!req.url) {
        res.statusCode = 404;
        res.end();
        return;
      }

      if (req.url.startsWith("/api/tags")) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ models: [{ name: "test-model" }] }));
        return;
      }

      if (req.url.startsWith("/api/generate")) {
        res.setHeader("Content-Type", "application/json");
        res.write('{"response":"Hello ","done":false}\n');
        res.write('{"response":"world","done":true}\n');
        res.end();
        return;
      }

      res.statusCode = 404;
      res.end();
    });

    server.listen(0, () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : 0;
      resolve({
        url: `http://127.0.0.1:${port}`,
        close: () =>
          new Promise((closeResolve, closeReject) => {
            server.close((err) => (err ? closeReject(err) : closeResolve()));
          })
      });
    });
  });
}

describe("OllamaAdapter", () => {
  it("lists models and streams responses", async () => {
    const server = await startMockOllama();
    const adapter = new OllamaAdapter();
    adapter.setEndpoint(server.url);

    const models = await adapter.listModels();
    expect(models).toEqual(["test-model"]);

    const request: LLMRequestContext = {
      systemPrompt: "System",
      context: "Context",
      userRequest: {
        sessionId: "session-1",
        prompt: "Say hello",
        task: "chat"
      },
      modelId: "test-model",
      temperature: 0.2,
      task: "chat"
    };

    const stream = await adapter.generate(request, new AbortController().signal);
    let output = "";
    for await (const chunk of stream.stream) {
      output += chunk.content;
    }

    expect(output).toBe("Hello world");

    await server.close();
  });
});
