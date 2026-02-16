"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToSwiftRules = void 0;
exports.erlangToSwift = erlangToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "swift");
function erlangToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "swift", code);
}
exports.erlangToSwiftRules = rules;
