export function ioTemplate(): string {
  return [
    "import { readFile, writeFile } from 'node:fs/promises';",
    "",
    "const data = { ok: true, count: 3 };",
    "await writeFile('data.json', JSON.stringify(data));",
    "const loaded = JSON.parse(await readFile('data.json', 'utf-8'));",
    "",
    "console.log(loaded);"
  ].join("\n");
}
