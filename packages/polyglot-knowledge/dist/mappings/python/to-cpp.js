"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToCppRules = void 0;
exports.pythonToCpp = pythonToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "cpp");
function pythonToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "cpp", code);
}
exports.pythonToCppRules = rules;
