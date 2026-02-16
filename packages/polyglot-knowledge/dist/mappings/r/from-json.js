"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToRRules = void 0;
exports.jsonToR = jsonToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "r");
function jsonToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "r", code);
}
exports.jsonToRRules = rules;
