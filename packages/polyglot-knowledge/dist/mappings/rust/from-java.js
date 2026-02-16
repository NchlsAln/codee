"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToRustRules = void 0;
exports.javaToRust = javaToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "rust");
function javaToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "rust", code);
}
exports.javaToRustRules = rules;
