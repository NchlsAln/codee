"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToGoRules = void 0;
exports.phpToGo = phpToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "go");
function phpToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "go", code);
}
exports.phpToGoRules = rules;
