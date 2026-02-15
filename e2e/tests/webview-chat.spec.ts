import { test, expect } from "@playwright/test";
import path from "node:path";
import { pathToFileURL } from "node:url";

const harnessPath = path.resolve(__dirname, "../fixtures/webview-harness/index.html");
const harnessUrl = pathToFileURL(harnessPath).toString();

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    (window as any).__messages = [];
    (window as any).__state = undefined;
    (window as any).acquireVsCodeApi = () => ({
      postMessage: (message: unknown) => (window as any).__messages.push(message),
      setState: (state: unknown) => {
        (window as any).__state = state;
      },
      getState: () => (window as any).__state
    });
  });

  await page.goto(harnessUrl);
});

test("sends chat messages to the host", async ({ page }) => {
  await page.getByTestId("chat-input").fill("Hello Codee");
  await page.getByTestId("send-button").click();

  await page.waitForFunction(() => (window as any).__messages.length > 0);
  const messages = await page.evaluate(() => (window as any).__messages);

  expect(messages).toContainEqual({
    type: "sendMessage",
    content: "Hello Codee",
    contextFiles: []
  });
});

test("opens settings via webview action", async ({ page }) => {
  await page.getByTestId("settings-button").click();

  await page.waitForFunction(() =>
    (window as any).__messages.some((message: any) => message.type === "openSettings")
  );

  const messages = await page.evaluate(() => (window as any).__messages);
  expect(messages.some((message: any) => message.type === "openSettings")).toBeTruthy();
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

  await page.waitForFunction(() =>
    (window as any).__messages.some((message: any) => message.type === "attachFile")
  );

  const messages = await page.evaluate(() => (window as any).__messages);
  expect(messages.some((message: any) => message.type === "attachFile" && message.path === "/repo/src/app.ts")).toBeTruthy();
});
