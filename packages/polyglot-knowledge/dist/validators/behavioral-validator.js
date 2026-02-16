"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBehavioralEquivalence = validateBehavioralEquivalence;
const pattern_detector_1 = require("../analysis/pattern-detector");
const behavioral_tests_1 = require("./behavioral-tests");
function validateBehavioralEquivalence(from, to, source, translated) {
    const { tests, validation } = (0, behavioral_tests_1.generateBehavioralTests)(from, to, source, translated);
    const sourcePatterns = (0, pattern_detector_1.detectPatterns)(source, from);
    const targetPatterns = (0, pattern_detector_1.detectPatterns)(translated, to);
    if (tests.length === 0) {
        return {
            tests,
            validation: {
                ok: false,
                details: ["No behavioral patterns detected; review needed."]
            },
            notes: ["Execution-based validation is not available; pattern parity only."]
        };
    }
    const matched = sourcePatterns.every((pattern) => targetPatterns.some((target) => target.id === pattern.id));
    return {
        tests,
        validation: {
            ok: validation.ok && matched,
            details: matched
                ? ["Behavior patterns appear preserved."]
                : ["Behavior patterns diverge; review needed."]
        },
        notes: ["Execution-based validation is not available; pattern parity only."]
    };
}
