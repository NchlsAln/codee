"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToScalaRules = void 0;
exports.jsonToScala = jsonToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "scala");
function jsonToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "scala", code);
}
exports.jsonToScalaRules = rules;
