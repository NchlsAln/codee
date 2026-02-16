"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
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
