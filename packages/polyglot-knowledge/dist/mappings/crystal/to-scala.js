"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToScalaRules = void 0;
exports.crystalToScala = crystalToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "scala");
function crystalToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "scala", code);
}
exports.crystalToScalaRules = rules;
