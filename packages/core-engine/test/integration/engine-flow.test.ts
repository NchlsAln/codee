import http from "node:http";
import path from "node:path";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import { CodeeEngine } from "../../src/engine/CodeeEngine";
import { DEFAULT_CONFIG } from "../../src/config/defaults";

process.env.NODE_ENV = "test";
process.env.CODEE_DB_KEY = process.env.CODEE_DB_KEY ?? "test-key";
process.env.CODEE_DISABLE_LSP_SPAWN = "1";
process.env.CODEE_SKIP_MODEL_INIT = "1";
process.env.CODEE_SKIP_MODEL_VALIDATION = "1";
process.env.CODEE_DISABLE_DB = "1";
process.env.CODEE_DISABLE_INDEXING = "1";
process.env.CODEE_DISABLE_WATCH = "1";

jest.setTimeout(20000);

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
        res.end(JSON.stringify({ models: [{ name: "test-model" }, { name: "test-embed" }] }));
        return;
      }

      if (req.url.startsWith("/api/embeddings")) {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ embedding: [0.1, 0.2, 0.3] }));
        });
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

async function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  let timer: NodeJS.Timeout | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`Timeout waiting for ${label}.`)), ms);
  });
  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timer) {
      clearTimeout(timer);
    }
  }
}

describe("CodeeEngine integration", () => {
  it("runs full flow with mock Ollama", async () => {
    const projectPath = await mkdtemp(path.join(os.tmpdir(), "codee-project-"));
    const configPath = path.join(projectPath, ".codee");
    await mkdir(configPath, { recursive: true });

    const server = await startMockOllama();
    const config = {
      ...DEFAULT_CONFIG,
      core: {
        ...DEFAULT_CONFIG.core,
        modelId: "test-model",
        embeddingModelId: "test-embed",
        modelEndpoint: server.url
      }
    };

    await writeFile(path.join(configPath, "config.json"), JSON.stringify(config, null, 2), "utf-8");

    const engine = CodeeEngine.getInstance();
    await withTimeout(engine.initialize({ projectPath }), 10000, "engine.initialize");
    const session = await withTimeout(engine.createSession(projectPath), 5000, "engine.createSession");

    const response = await withTimeout(
      engine.processRequest({
      sessionId: session.id,
      prompt: "Say hello",
      task: "chat",
      projectPath
      }),
      10000,
      "engine.processRequest"
    );

    let output = "";
    await withTimeout(
      new Promise<void>((resolve, reject) => {
      response.onChunk((chunk) => {
        output += chunk.content;
      });
      response.onComplete(() => resolve());
      response.onError((error) => reject(error));
      }),
      10000,
      "response.onComplete"
    );

    expect(output).toContain("Hello world");

    await server.close();
    await rm(projectPath, { recursive: true, force: true });
  });
});
