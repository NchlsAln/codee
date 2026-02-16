"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToDartRules = void 0;
exports.erlangToDart = erlangToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "dart");
function erlangToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "dart", code);
}
exports.erlangToDartRules = rules;
