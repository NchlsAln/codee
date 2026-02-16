"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToGoRules = void 0;
exports.swiftToGo = swiftToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "go");
function swiftToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "go", code);
}
exports.swiftToGoRules = rules;
