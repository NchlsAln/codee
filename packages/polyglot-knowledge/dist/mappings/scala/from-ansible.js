"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToScalaRules = void 0;
exports.ansibleToScala = ansibleToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "scala");
function ansibleToScala(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "scala", code);
}
exports.ansibleToScalaRules = rules;
