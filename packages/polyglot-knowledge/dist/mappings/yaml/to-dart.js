"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToDartRules = void 0;
exports.yamlToDart = yamlToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "dart");
function yamlToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "dart", code);
}
exports.yamlToDartRules = rules;
