export function mockTemplate(): string {
  return [
    "import { describe, expect, it, vi } from 'vitest';",
    "",
    "const api = { fetch: () => 'real' };",
    "",
    "describe('mock', () => {",
    "  it('stubs fetch', () => {",
    "    const spy = vi.spyOn(api, 'fetch').mockReturnValue('mock');",
    "    expect(api.fetch()).toBe('mock');",
    "    spy.mockRestore();",
    "  });",
    "});"
  ].join("\n");
}
