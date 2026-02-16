import {
  BatchTranslator,
  ProjectAnalyzer,
  type BatchTranslationOptions,
  type BatchTranslationResult,
  type ProjectAnalysis
} from "@codee/polyglot-knowledge";

export interface ProjectTranslationOptions extends BatchTranslationOptions {}

export class ProjectTranslator {
  private readonly analyzer: ProjectAnalyzer;
  private readonly translator: BatchTranslator;

  constructor(private readonly projectRoot: string) {
    this.analyzer = new ProjectAnalyzer(projectRoot);
    this.translator = new BatchTranslator(projectRoot);
  }

  async analyzeProject(language: ProjectTranslationOptions["from"]): Promise<ProjectAnalysis> {
    return this.analyzer.analyze(this.projectRoot, language);
  }

  async translateProject(options: ProjectTranslationOptions): Promise<BatchTranslationResult> {
    return this.translator.translate(options);
  }
}
