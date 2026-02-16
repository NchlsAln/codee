"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToCppRules = void 0;
exports.yamlToCpp = yamlToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "cpp");
function yamlToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "cpp", code);
}
exports.yamlToCppRules = rules;
