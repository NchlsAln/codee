"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToBashRules = void 0;
exports.jsonToBash = jsonToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "bash");
function jsonToBash(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "bash", code);
}
exports.jsonToBashRules = rules;
