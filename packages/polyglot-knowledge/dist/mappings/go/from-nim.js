"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToGoRules = void 0;
exports.nimToGo = nimToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "go");
function nimToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "go", code);
}
exports.nimToGoRules = rules;
