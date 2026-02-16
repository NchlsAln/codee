"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToRustRules = void 0;
exports.goToRust = goToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "rust");
function goToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "rust", code);
}
exports.goToRustRules = rules;
