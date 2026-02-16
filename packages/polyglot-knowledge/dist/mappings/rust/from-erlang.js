"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToRustRules = void 0;
exports.erlangToRust = erlangToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "rust");
function erlangToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "rust", code);
}
exports.erlangToRustRules = rules;
