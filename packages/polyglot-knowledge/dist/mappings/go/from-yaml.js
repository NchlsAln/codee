"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToGoRules = void 0;
exports.yamlToGo = yamlToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "go");
function yamlToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "go", code);
}
exports.yamlToGoRules = rules;
