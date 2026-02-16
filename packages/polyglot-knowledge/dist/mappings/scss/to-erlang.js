"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToErlangRules = void 0;
exports.scssToErlang = scssToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "erlang");
function scssToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "erlang", code);
}
exports.scssToErlangRules = rules;
