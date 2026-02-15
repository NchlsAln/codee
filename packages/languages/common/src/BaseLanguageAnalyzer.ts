import { AnalyzerResult } from "./types";

export class BaseLanguageAnalyzer {
  constructor(protected readonly languageId: string, protected readonly grammar: string) {}

  async analyze(_source: string): Promise<AnalyzerResult> {
    return {
      functions: [],
      classes: [],
      imports: [],
      dependencies: [],
      complexity: {
        cyclomatic: 0,
        cognitive: 0,
        maintainability: 100
      },
      smells: []
    };
  }
}