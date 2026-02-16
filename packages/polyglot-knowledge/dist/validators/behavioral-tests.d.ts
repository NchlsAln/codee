import { LanguageId, ValidationResult } from "../types";
export interface BehavioralTestCase {
    name: string;
    input: string;
    expected: string;
}
export declare function generateBehavioralTests(from: LanguageId, to: LanguageId, source: string, translated: string): {
    tests: BehavioralTestCase[];
    validation: ValidationResult;
};
