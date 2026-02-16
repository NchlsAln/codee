"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToAwkRules = void 0;
exports.jsonToAwk = jsonToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "awk");
function jsonToAwk(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "awk", code);
}
exports.jsonToAwkRules = rules;
