"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "import { describe, expect, it } from 'vitest';",
        "",
        "function add(a: number, b: number): number {",
        "  return a + b;",
        "}",
        "",
        "describe('add', () => {",
        "  it('adds numbers', () => {",
        "    expect(add(2, 3)).toBe(5);",
        "  });",
        "});"
    ].join("\n");
}
