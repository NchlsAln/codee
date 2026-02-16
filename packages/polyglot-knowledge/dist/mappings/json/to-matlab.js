"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToMatlabRules = void 0;
exports.jsonToMatlab = jsonToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "matlab");
function jsonToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "matlab", code);
}
exports.jsonToMatlabRules = rules;
