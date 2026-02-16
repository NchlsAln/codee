"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToGoRules = void 0;
exports.typescriptToGo = typescriptToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "go");
function typescriptToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "go", code);
}
exports.typescriptToGoRules = rules;
