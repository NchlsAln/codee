"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToRustRules = void 0;
exports.bashToRust = bashToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "rust");
function bashToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "rust", code);
}
exports.bashToRustRules = rules;
