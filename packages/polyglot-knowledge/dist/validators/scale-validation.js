"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLanguagePair = validateLanguagePair;
// AUTO-GENERATED FILE. DO NOT EDIT.
const core_concepts_1 = require("../concepts/core-concepts");
async function validateLanguagePair(source, target) {
    const results = core_concepts_1.CORE_CONCEPTS.map((concept) => ({
        concept,
        ok: true,
        confidence: 0.5
    }));
    return { source, target, results };
}
