"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToGoRules = void 0;
exports.pythonToGo = pythonToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "go");
function pythonToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "go", code);
}
exports.pythonToGoRules = rules;
