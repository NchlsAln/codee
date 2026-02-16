"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToRustRules = void 0;
exports.jsonToRust = jsonToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "rust");
function jsonToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "rust", code);
}
exports.jsonToRustRules = rules;
