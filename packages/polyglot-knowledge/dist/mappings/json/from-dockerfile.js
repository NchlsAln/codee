"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToJsonRules = void 0;
exports.dockerfileToJson = dockerfileToJson;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "json");
function dockerfileToJson(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "json", code);
}
exports.dockerfileToJsonRules = rules;
