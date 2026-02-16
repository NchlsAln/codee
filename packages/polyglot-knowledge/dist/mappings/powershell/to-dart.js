"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToDartRules = void 0;
exports.powershellToDart = powershellToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "dart");
function powershellToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "dart", code);
}
exports.powershellToDartRules = rules;
