"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToGoRules = void 0;
exports.rToGo = rToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "go");
function rToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "go", code);
}
exports.rToGoRules = rules;
