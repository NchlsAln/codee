"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToRustRules = void 0;
exports.typescriptToRust = typescriptToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "rust");
function typescriptToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "rust", code);
}
exports.typescriptToRustRules = rules;
