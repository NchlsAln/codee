"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToRustRules = void 0;
exports.csharpToRust = csharpToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "rust");
function csharpToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "rust", code);
}
exports.csharpToRustRules = rules;
