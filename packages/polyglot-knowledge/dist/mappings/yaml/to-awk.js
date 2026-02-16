"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToAwkRules = void 0;
exports.yamlToAwk = yamlToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "awk");
function yamlToAwk(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "awk", code);
}
exports.yamlToAwkRules = rules;
