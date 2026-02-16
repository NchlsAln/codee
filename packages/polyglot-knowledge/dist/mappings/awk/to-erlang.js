"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToErlangRules = void 0;
exports.awkToErlang = awkToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "erlang");
function awkToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "erlang", code);
}
exports.awkToErlangRules = rules;
