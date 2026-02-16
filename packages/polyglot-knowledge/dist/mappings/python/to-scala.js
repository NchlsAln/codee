"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToScalaRules = void 0;
exports.pythonToScala = pythonToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "scala");
function pythonToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "scala", code);
}
exports.pythonToScalaRules = rules;
