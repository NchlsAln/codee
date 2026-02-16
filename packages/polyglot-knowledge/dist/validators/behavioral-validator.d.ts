import { LanguageId, ValidationResult } from "../types";
import { BehavioralTestCase } from "./behavioral-tests";
export interface BehavioralValidationReport {
    validation: ValidationResult;
    tests: BehavioralTestCase[];
    notes: string[];
}
export declare function validateBehavioralEquivalence(from: LanguageId, to: LanguageId, source: string, translated: string): BehavioralValidationReport;
