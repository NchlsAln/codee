import { LanguageId, ValidationResult } from "../types";

export interface ComplexityReport {
  source: string;
  target: string;
  ok: boolean;
  notes: string[];
}

export function validatePerformance(
  from: LanguageId,
  to: LanguageId,
  source: string,
  translated: string
): ValidationResult {
  const sourceComplexity = estimateComplexity(source, from);
  const targetComplexity = estimateComplexity(translated, to);

  if (sourceComplexity === "unknown" || targetComplexity === "unknown") {
    return {
      ok: false,
      details: [
        `Complexity estimate unavailable (source=${sourceComplexity}, target=${targetComplexity}).`,
        "Review performance manually."
      ]
    };
  }

  if (sourceComplexity === targetComplexity) {
    return {
      ok: true,
      details: [`Translation preserves complexity: ${sourceComplexity}.`]
    };
  }

  return {
    ok: false,
    details: [
      `Complexity mismatch: source=${sourceComplexity}, target=${targetComplexity}.`,
      "Review performance impact."
    ]
  };
}

function estimateComplexity(code: string, language: LanguageId): string {
  const loopCount = countLoops(code, language);
  if (loopCount === 0) {
    return "O(1)";
  }
  if (loopCount === 1) {
    return "O(n)";
  }
  if (loopCount === 2) {
    return "O(n^2)";
  }
  if (loopCount >= 3) {
    return "O(n^3+)";
  }
  return "unknown";
}

function countLoops(code: string, language: LanguageId): number {
  const patterns: Partial<Record<LanguageId, RegExp>> = {
    python: /\bfor\b|\bwhile\b/g,
    typescript: /\bfor\b|\bwhile\b/g,
    javascript: /\bfor\b|\bwhile\b/g,
    rust: /\bfor\b|\bwhile\b|loop\b/g,
    go: /\bfor\b/g,
    java: /\bfor\b|\bwhile\b/g,
    cpp: /\bfor\b|\bwhile\b/g
  };

  const pattern = patterns[language] ?? /\bfor\b|\bwhile\b/g;
  const matches = code.match(pattern);
  return matches ? matches.length : 0;
}
