"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBehavioralTests = generateBehavioralTests;
const pattern_detector_1 = require("../analysis/pattern-detector");
function generateBehavioralTests(from, to, source, translated) {
    const sourcePatterns = (0, pattern_detector_1.detectPatterns)(source, from);
    const targetPatterns = (0, pattern_detector_1.detectPatterns)(translated, to);
    const tests = sourcePatterns.map((pattern) => ({
        name: `Behavior: ${pattern.id}`,
        input: source,
        expected: `Target should preserve ${pattern.id} semantics.`
    }));
    const matched = sourcePatterns.some((pattern) => targetPatterns.some((target) => target.id === pattern.id));
    return {
        tests,
        validation: {
            ok: matched || sourcePatterns.length === 0,
            details: matched
                ? ["Detected matching behavioral patterns in translated output."]
                : ["Translated output did not preserve detected patterns."]
        }
    };
}
