export function svelteKitTemplate(): string {
  return [
    "// +page.server.ts",
    "export const load = async () => ({ now: Date.now() });",
    "",
    "// +page.svelte",
    '<script lang="ts">',
    "  export let data: { now: number };",
    "</script>",
    "",
    "<h1>{data.now}</h1>",
    "",
    "// +page.server.ts (actions)",
    "export const actions = {",
    "  default: async () => ({ ok: true })",
    "};",
  ].join("\n");
}
