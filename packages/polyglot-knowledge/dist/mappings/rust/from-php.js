"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToRustRules = void 0;
exports.phpToRust = phpToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "rust");
function phpToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "rust", code);
}
exports.phpToRustRules = rules;
