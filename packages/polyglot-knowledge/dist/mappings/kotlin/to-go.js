"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToGoRules = void 0;
exports.kotlinToGo = kotlinToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "go");
function kotlinToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "go", code);
}
exports.kotlinToGoRules = rules;
