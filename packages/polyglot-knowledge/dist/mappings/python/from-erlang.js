"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToPythonRules = void 0;
exports.erlangToPython = erlangToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "python");
function erlangToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "python", code);
}
exports.erlangToPythonRules = rules;
