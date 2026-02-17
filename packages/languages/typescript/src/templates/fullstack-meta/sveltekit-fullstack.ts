export function sveltekitFullstackTemplate(): string {
  return [
    "// src/hooks.server.ts",
    "export const handle = async ({ event, resolve }) => {",
    "  return resolve(event);",
    "};",
    "",
    "// src/routes/+page.server.ts",
    "export const actions = {",
    "  default: async () => ({ ok: true })",
    "};",
  ].join("\n");
}
