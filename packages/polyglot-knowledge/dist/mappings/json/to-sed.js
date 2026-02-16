"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToSedRules = void 0;
exports.jsonToSed = jsonToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "sed");
function jsonToSed(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "sed", code);
}
exports.jsonToSedRules = rules;
