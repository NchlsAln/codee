"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToJavaRules = void 0;
exports.dockerfileToJava = dockerfileToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "java");
function dockerfileToJava(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "java", code);
}
exports.dockerfileToJavaRules = rules;
