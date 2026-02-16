"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToScalaRules = void 0;
exports.goToScala = goToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "scala");
function goToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "scala", code);
}
exports.goToScalaRules = rules;
