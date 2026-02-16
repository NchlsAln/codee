"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToRustRules = void 0;
exports.sedToRust = sedToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "rust");
function sedToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "rust", code);
}
exports.sedToRustRules = rules;
