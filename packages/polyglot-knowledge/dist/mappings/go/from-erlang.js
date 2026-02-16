"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToGoRules = void 0;
exports.erlangToGo = erlangToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "go");
function erlangToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "go", code);
}
exports.erlangToGoRules = rules;
