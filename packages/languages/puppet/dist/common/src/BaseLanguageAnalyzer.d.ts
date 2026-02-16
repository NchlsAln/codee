import { AnalyzerResult } from "./types";
export declare class BaseLanguageAnalyzer {
  protected readonly languageId: string;
  protected readonly grammar: string;
  constructor(languageId: string, grammar: string);
  analyze(_source: string): Promise<AnalyzerResult>;
}
