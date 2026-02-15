const { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } = require("fs");
const { join, dirname, resolve } = require("path");

const repoRoot = resolve(__dirname, "..", "..");
const webviewDist = join(repoRoot, "apps", "codee-vscode", "webview-ui", "dist");
const templatePath = join(repoRoot, "apps", "codee-vscode", "webview-ui", "index.html");
const targetDir = join(repoRoot, "apps", "codee-vscode", "dist", "webview");
const targetHtml = join(targetDir, "index.html");

mkdirSync(targetDir, { recursive: true });

const jsSource = join(webviewDist, "index.js");
const cssSource = join(webviewDist, "index.css");
const jsTarget = join(targetDir, "index.js");
const cssTarget = join(targetDir, "index.css");

copyFileSync(jsSource, jsTarget);
if (existsSync(cssSource)) {
  copyFileSync(cssSource, cssTarget);
}

const template = readFileSync(templatePath, "utf-8");
writeFileSync(targetHtml, template, "utf-8");
console.log("Webview assets copied.");
