"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToCppRules = void 0;
exports.powershellToCpp = powershellToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "cpp");
function powershellToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "cpp", code);
}
exports.powershellToCppRules = rules;
