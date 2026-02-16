"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToNimRules = void 0;
exports.jsonToNim = jsonToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "nim");
function jsonToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "nim", code);
}
exports.jsonToNimRules = rules;
