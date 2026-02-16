"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "import { test, expect } from 'vitest';",
        "import fc from 'fast-check';",
        "",
        "test('addition is commutative', () => {",
        "  fc.assert(fc.property(fc.integer(), fc.integer(), (a, b) => a + b === b + a));",
        "});"
    ].join("\n");
}
