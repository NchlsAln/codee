export function hashingTemplate(): string {
  return [
    "import { createHash } from 'node:crypto';",
    "",
    "const digest = createHash('sha256').update('secret').digest('hex');",
    "console.log(digest);"
  ].join("\n");
}
