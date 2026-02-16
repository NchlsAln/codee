"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToCppRules = void 0;
exports.erlangToCpp = erlangToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "cpp");
function erlangToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "cpp", code);
}
exports.erlangToCppRules = rules;
