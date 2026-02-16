"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToJavaRules = void 0;
exports.puppetToJava = puppetToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "java");
function puppetToJava(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "java", code);
}
exports.puppetToJavaRules = rules;
