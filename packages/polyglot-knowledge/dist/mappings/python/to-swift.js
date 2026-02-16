"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToSwiftRules = void 0;
exports.pythonToSwift = pythonToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "swift");
function pythonToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "swift", code);
}
exports.pythonToSwiftRules = rules;
