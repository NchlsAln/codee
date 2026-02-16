// AUTO-GENERATED FILE. DO NOT EDIT.
import { CORE_CONCEPTS } from "../concepts/core-concepts";
import type { LanguageId } from "../language-ids";

export interface ValidationResultEntry {
  concept: string;
  ok: boolean;
  confidence: number;
}

export interface ValidationReport {
  source: LanguageId;
  target: LanguageId;
  results: ValidationResultEntry[];
}

export async function validateLanguagePair(source: LanguageId, target: LanguageId): Promise<ValidationReport> {
  const results = CORE_CONCEPTS.map((concept) => ({
    concept,
    ok: true,
    confidence: 0.5
  }));

  return { source, target, results };
}
