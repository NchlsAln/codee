"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToRustRules = void 0;
exports.nimToRust = nimToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "rust");
function nimToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "rust", code);
}
exports.nimToRustRules = rules;
