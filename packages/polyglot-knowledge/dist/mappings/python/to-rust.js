"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToRustRules = void 0;
exports.pythonToRust = pythonToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "rust");
function pythonToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "rust", code);
}
exports.pythonToRustRules = rules;
