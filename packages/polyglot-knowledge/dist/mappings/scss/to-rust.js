"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToRustRules = void 0;
exports.scssToRust = scssToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "rust");
function scssToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "rust", code);
}
exports.scssToRustRules = rules;
