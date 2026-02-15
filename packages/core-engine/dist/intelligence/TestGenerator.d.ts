import { CorrectionStore } from "./learning";
import { TestGenerationPlan, TestSuiteResult } from "./types";
export declare class TestGenerator {
    private readonly correctionStore?;
    constructor(correctionStore?: CorrectionStore | undefined);
    generate(plan: TestGenerationPlan): Promise<TestSuiteResult>;
    private buildTestPath;
    private findFunctionNames;
    private buildTestBody;
}
