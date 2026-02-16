"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToNimRules = void 0;
exports.yamlToNim = yamlToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "nim");
function yamlToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "nim", code);
}
exports.yamlToNimRules = rules;
