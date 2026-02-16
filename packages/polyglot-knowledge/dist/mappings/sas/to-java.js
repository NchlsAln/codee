"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToJavaRules = void 0;
exports.sasToJava = sasToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "java");
function sasToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "java", code);
}
exports.sasToJavaRules = rules;
