"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToRustRules = void 0;
exports.crystalToRust = crystalToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "rust");
function crystalToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "rust", code);
}
exports.crystalToRustRules = rules;
