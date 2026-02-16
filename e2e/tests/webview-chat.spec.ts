import { test, expect } from "@playwright/test";
import path from "node:path";
import { pathToFileURL } from "node:url";

type WebviewMessage = {
  type: string;
  [key: string]: unknown;
};

type VsCodeApi = {
  postMessage: (message: unknown) => void;
  setState: (state: unknown) => void;
  getState: () => unknown;
};

declare global {
  interface Window {
    __messages: WebviewMessage[];
    __state?: unknown;
    acquireVsCodeApi: () => VsCodeApi;
  }
}

const harnessPath = path.resolve(__dirname, "../fixtures/webview-harness/index.html");
const harnessUrl = pathToFileURL(harnessPath).toString();

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.__messages = [];
    window.__state = undefined;
    window.acquireVsCodeApi = () => ({
      postMessage: (message: unknown) => window.__messages.push(message),
      setState: (state: unknown) => {
        window.__state = state;
      },
      getState: () => window.__state
    });
  });

  await page.goto(harnessUrl);
});

test("sends chat messages to the host", async ({ page }) => {
  await page.getByTestId("chat-input").fill("Hello Codee");
  await page.getByTestId("send-button").click();

  await page.waitForFunction(() => window.__messages.length > 0);
  const messages = await page.evaluate(() => window.__messages);

  expect(messages).toContainEqual({
    type: "sendMessage",
    content: "Hello Codee",
    contextFiles: []
  });
});

test("opens settings via webview action", async ({ page }) => {
  await page.getByTestId("settings-button").click();

  await page.waitForFunction(() => window.__messages.some((message) => message.type === "openSettings"));

  const messages = await page.evaluate(() => window.__messages);
  expect(messages.some((message) => message.type === "openSettings")).toBeTruthy();
});

test("attaches file mentions from context", async ({ page }) => {
  await page.evaluate(() => {
    window.postMessage(
      {
        type: "updateContext",
        files: [{ kind: "file", label: "src/app.ts", path: "/repo/src/app.ts" }],
        tokenCount: 12
      },
      "*"
    );
  });

  await page.getByTestId("chat-input").fill("@app");
  await page.getByTestId("mention-item").first().click();

  await page.waitForFunction(() => window.__messages.some((message) => message.type === "attachFile"));

  const messages = await page.evaluate(() => window.__messages);
  expect(messages.some((message) => message.type === "attachFile" && message.path === "/repo/src/app.ts")).toBeTruthy();
});
