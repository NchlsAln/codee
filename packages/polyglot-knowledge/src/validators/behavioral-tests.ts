import { detectPatterns } from "../analysis/pattern-detector";
import { LanguageId, ValidationResult } from "../types";

export interface BehavioralTestCase {
  name: string;
  input: string;
  expected: string;
}

export function generateBehavioralTests(
  from: LanguageId,
  to: LanguageId,
  source: string,
  translated: string
): { tests: BehavioralTestCase[]; validation: ValidationResult } {
  const sourcePatterns = detectPatterns(source, from);
  const targetPatterns = detectPatterns(translated, to);

  const tests: BehavioralTestCase[] = sourcePatterns.map((pattern) => ({
    name: `Behavior: ${pattern.id}`,
    input: source,
    expected: `Target should preserve ${pattern.id} semantics.`
  }));

  const matched = sourcePatterns.some((pattern) =>
    targetPatterns.some((target) => target.id === pattern.id)
  );

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
