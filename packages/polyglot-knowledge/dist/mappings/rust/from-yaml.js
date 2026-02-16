"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToRustRules = void 0;
exports.yamlToRust = yamlToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "rust");
function yamlToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "rust", code);
}
exports.yamlToRustRules = rules;
