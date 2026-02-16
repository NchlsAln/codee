import { LanguageId, ValidationResult } from "../types";
export interface ComplexityReport {
    source: string;
    target: string;
    ok: boolean;
    notes: string[];
}
export declare function validatePerformance(from: LanguageId, to: LanguageId, source: string, translated: string): ValidationResult;
