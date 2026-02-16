"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToScalaRules = void 0;
exports.puppetToScala = puppetToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "scala");
function puppetToScala(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "scala", code);
}
exports.puppetToScalaRules = rules;
