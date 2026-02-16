"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToHtmlRules = void 0;
exports.dockerfileToHtml = dockerfileToHtml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "html");
function dockerfileToHtml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "html", code);
}
exports.dockerfileToHtmlRules = rules;
