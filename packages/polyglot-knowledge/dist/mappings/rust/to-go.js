"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToGoRules = void 0;
exports.rustToGo = rustToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "go");
function rustToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "go", code);
}
exports.rustToGoRules = rules;
