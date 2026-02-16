"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToScalaRules = void 0;
exports.terraformToScala = terraformToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "scala");
function terraformToScala(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "scala", code);
}
exports.terraformToScalaRules = rules;
