"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToRustRules = void 0;
exports.matlabToRust = matlabToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "rust");
function matlabToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "rust", code);
}
exports.matlabToRustRules = rules;
