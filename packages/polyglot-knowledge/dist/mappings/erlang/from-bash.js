"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToErlangRules = void 0;
exports.bashToErlang = bashToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "erlang");
function bashToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "erlang", code);
}
exports.bashToErlangRules = rules;
