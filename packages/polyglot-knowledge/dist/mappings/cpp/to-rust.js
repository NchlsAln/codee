"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToRustRules = void 0;
exports.cppToRust = cppToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "rust");
function cppToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "rust", code);
}
exports.cppToRustRules = rules;
