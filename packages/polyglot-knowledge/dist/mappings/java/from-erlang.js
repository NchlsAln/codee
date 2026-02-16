"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToJavaRules = void 0;
exports.erlangToJava = erlangToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "java");
function erlangToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "java", code);
}
exports.erlangToJavaRules = rules;
