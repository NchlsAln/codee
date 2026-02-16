"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToScalaRules = void 0;
exports.csharpToScala = csharpToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "scala");
function csharpToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "scala", code);
}
exports.csharpToScalaRules = rules;
