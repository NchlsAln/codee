import { detectPatterns } from "../analysis/pattern-detector";
import { LanguageId, ValidationResult } from "../types";
import { BehavioralTestCase, generateBehavioralTests } from "./behavioral-tests";

export interface BehavioralValidationReport {
  validation: ValidationResult;
  tests: BehavioralTestCase[];
  notes: string[];
}

export function validateBehavioralEquivalence(
  from: LanguageId,
  to: LanguageId,
  source: string,
  translated: string
): BehavioralValidationReport {
  const { tests, validation } = generateBehavioralTests(from, to, source, translated);
  const sourcePatterns = detectPatterns(source, from);
  const targetPatterns = detectPatterns(translated, to);

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

  const matched = sourcePatterns.every((pattern) =>
    targetPatterns.some((target) => target.id === pattern.id)
  );

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
