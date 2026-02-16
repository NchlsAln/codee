"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToScalaRules = void 0;
exports.rubyToScala = rubyToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "scala");
function rubyToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "scala", code);
}
exports.rubyToScalaRules = rules;
