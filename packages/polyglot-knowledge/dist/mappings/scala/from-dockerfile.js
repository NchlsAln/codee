"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToScalaRules = void 0;
exports.dockerfileToScala = dockerfileToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "scala");
function dockerfileToScala(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "scala", code);
}
exports.dockerfileToScalaRules = rules;
