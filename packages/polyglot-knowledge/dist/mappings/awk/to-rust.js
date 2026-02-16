"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToRustRules = void 0;
exports.awkToRust = awkToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "rust");
function awkToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "rust", code);
}
exports.awkToRustRules = rules;
