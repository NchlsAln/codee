"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToScalaRules = void 0;
exports.rustToScala = rustToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "scala");
function rustToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "scala", code);
}
exports.rustToScalaRules = rules;
