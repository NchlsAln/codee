"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToScalaRules = void 0;
exports.typescriptToScala = typescriptToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "scala");
function typescriptToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "scala", code);
}
exports.typescriptToScalaRules = rules;
