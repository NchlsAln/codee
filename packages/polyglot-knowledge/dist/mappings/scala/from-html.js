"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToScalaRules = void 0;
exports.htmlToScala = htmlToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "scala");
function htmlToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "scala", code);
}
exports.htmlToScalaRules = rules;
