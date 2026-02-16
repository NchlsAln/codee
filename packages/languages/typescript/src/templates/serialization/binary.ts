export function binaryTemplate(): string {
  return [
    "import { pack, unpack } from 'msgpackr';",
    "",
    "const payload = { id: 1, name: 'Ada' };",
    "const blob = pack(payload);",
    "const restored = unpack(blob);",
    "",
    "console.log(restored);"
  ].join("\n");
}
