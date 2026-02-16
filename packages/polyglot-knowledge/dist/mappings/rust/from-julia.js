"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToRustRules = void 0;
exports.juliaToRust = juliaToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "rust");
function juliaToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "rust", code);
}
exports.juliaToRustRules = rules;
