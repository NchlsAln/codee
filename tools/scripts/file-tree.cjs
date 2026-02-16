/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, "FILE_TREE.md");
const IGNORE_DIRS = new Set([
  ".git",
  ".turbo",
  ".vscode-test",
  ".venv",
  "node_modules",
  "dist",
  "build",
  "out",
  "coverage"
]);
const IGNORE_FILES = new Set([".DS_Store", "FILE_TREE.md"]);

function shouldIgnoreDir(name) {
  return IGNORE_DIRS.has(name);
}

function shouldIgnoreFile(name) {
  return IGNORE_FILES.has(name);
}

function buildTree(dir, prefix) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const filtered = entries.filter((entry) => {
    if (entry.isDirectory()) {
      return !shouldIgnoreDir(entry.name);
    }
    return !shouldIgnoreFile(entry.name);
  });

  filtered.sort((a, b) => {
    if (a.isDirectory() !== b.isDirectory()) {
      return a.isDirectory() ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  const lines = [];
  filtered.forEach((entry, index) => {
    const isLast = index === filtered.length - 1;
    const connector = isLast ? "`-- " : "|-- ";
    lines.push(prefix + connector + entry.name);
    if (entry.isDirectory()) {
      const nextPrefix = prefix + (isLast ? "    " : "|   ");
      lines.push(...buildTree(path.join(dir, entry.name), nextPrefix));
    }
  });

  return lines;
}

function writeTree() {
  const lines = [".", ...buildTree(ROOT, "")];
  const content = [
    "# File Tree",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "````",
    ...lines,
    "````",
    ""
  ].join("\n");

  fs.writeFileSync(OUTPUT, content, "utf8");
}

function watchTree() {
  let timer = null;
  fs.watch(
    ROOT,
    { recursive: true },
    (eventType, filename) => {
      if (!filename) {
        return;
      }
      const base = path.basename(filename);
      if (shouldIgnoreFile(base)) {
        return;
      }
      const parts = filename.split(path.sep);
      if (parts.some((part) => shouldIgnoreDir(part))) {
        return;
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        writeTree();
      }, 250);
    }
  );
  // eslint-disable-next-line no-console
  console.log("Watching for file changes. Press Ctrl+C to stop.");
}

writeTree();
if (process.argv.includes("--watch")) {
  watchTree();
}
