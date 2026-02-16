"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToJavaRules = void 0;
exports.crystalToJava = crystalToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "java");
function crystalToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "java", code);
}
exports.crystalToJavaRules = rules;
