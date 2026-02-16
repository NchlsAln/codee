"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToGoRules = void 0;
exports.dartToGo = dartToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "go");
function dartToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "go", code);
}
exports.dartToGoRules = rules;
