import { CorrectionStore } from "./learning";
import { NL2CPlan } from "./types";
export declare class NaturalLanguageToCode {
    private readonly correctionStore?;
    constructor(correctionStore?: CorrectionStore | undefined);
    plan(prompt: string, language: "typescript" | "python"): Promise<NL2CPlan>;
}
