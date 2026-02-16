"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToGoRules = void 0;
exports.jsonToGo = jsonToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "go");
function jsonToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "go", code);
}
exports.jsonToGoRules = rules;
