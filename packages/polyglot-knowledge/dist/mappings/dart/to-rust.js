"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToRustRules = void 0;
exports.dartToRust = dartToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "rust");
function dartToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "rust", code);
}
exports.dartToRustRules = rules;
