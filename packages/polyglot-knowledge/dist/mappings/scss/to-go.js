"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToGoRules = void 0;
exports.scssToGo = scssToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "go");
function scssToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "go", code);
}
exports.scssToGoRules = rules;
