"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToRustRules = void 0;
exports.rToRust = rToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "rust");
function rToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "rust", code);
}
exports.rToRustRules = rules;
