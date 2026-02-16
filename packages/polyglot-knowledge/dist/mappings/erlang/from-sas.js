"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToErlangRules = void 0;
exports.sasToErlang = sasToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "erlang");
function sasToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "erlang", code);
}
exports.sasToErlangRules = rules;
