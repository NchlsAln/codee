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
export declare function validateLanguagePair(source: LanguageId, target: LanguageId): Promise<ValidationReport>;
