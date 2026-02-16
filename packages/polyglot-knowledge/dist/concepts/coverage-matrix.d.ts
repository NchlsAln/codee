import type { LanguageId } from "../language-ids";
import type { CoreConcept } from "./core-concepts";
export type ConceptCoverage = {
    confidence: number;
    limitations: string[];
};
export declare const COVERAGE_MATRIX: Record<LanguageId, Record<CoreConcept, ConceptCoverage>>;
