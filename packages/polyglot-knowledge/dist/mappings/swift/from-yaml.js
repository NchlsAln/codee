"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToSwiftRules = void 0;
exports.yamlToSwift = yamlToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "swift");
function yamlToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "swift", code);
}
exports.yamlToSwiftRules = rules;
