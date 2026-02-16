"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToPhpRules = void 0;
exports.jsonToPhp = jsonToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "php");
function jsonToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "php", code);
}
exports.jsonToPhpRules = rules;
