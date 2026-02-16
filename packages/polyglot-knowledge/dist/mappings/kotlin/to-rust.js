"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToRustRules = void 0;
exports.kotlinToRust = kotlinToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "rust");
function kotlinToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "rust", code);
}
exports.kotlinToRustRules = rules;
