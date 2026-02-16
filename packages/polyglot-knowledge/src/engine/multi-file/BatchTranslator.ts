import path from "node:path";
import { translateCode } from "../../index";
import { validateSyntax } from "../../validators/syntax-validator";
import {
  BatchTranslationOptions,
  BatchTranslationResult,
  ProjectStructure,
  ProjectTranslationResult,
  TranslationJob,
  TranslationFileResult,
  TranslationStatus,
  TranslatedFile,
  TranslationJobStatus
} from "../../types";
import { ProjectAnalyzer } from "./ProjectAnalyzer";
import { ImportModuleMapper } from "./ImportModuleMapper";
import { TypeRegistry } from "./TypeRegistry";

const EXTENSION_MAP: Record<string, string> = {
  python: ".py",
  typescript: ".ts",
  rust: ".rs",
  go: ".go",
  java: ".java",
  cpp: ".cpp",
  javascript: ".js"
};

export class BatchTranslator {
  private readonly analyzer: ProjectAnalyzer;
  private readonly mapper = new ImportModuleMapper();
  private readonly typeRegistry = new TypeRegistry();
  private queue: TranslationJob[] = [];
  private nextJobIndex = 0;

  constructor(private readonly projectRoot: string) {
    this.analyzer = new ProjectAnalyzer(projectRoot);
  }

  async translate(options: BatchTranslationOptions): Promise<BatchTranslationResult> {
    const analysis = await this.analyzer.analyze(options.projectRoot, options.from);
    const total = analysis.files.length;
    const results: TranslationFileResult[] = [];
    const notes: string[] = [];

    for (const [index, file] of analysis.files.entries()) {
      options.onProgress?.(`Translating ${index + 1} of ${total} files...`, index + 1, total);

      const definitions = this.typeRegistry.registerFromSource(file.content, options.from, file.path);

      const translation = translateCode(options.from, options.to, file.content);
      const rewritten = this.mapper.rewriteImports(translation.output, options.from, options.to, {
        basePackage: options.basePackage,
        namespace: options.namespace,
        projectRoot: options.projectRoot,
        filePath: file.path
      });
      const targetPath = this.mapTargetPath(options.outputRoot, file.path, options.from, options.to);

      const status = this.resolveStatus(translation.confidence ?? 0, translation.warnings ?? [], file.translationComplexity);
      const duplicateTypes = this.typeRegistry.findDuplicates(definitions, file.path);
      const finalStatus = duplicateTypes.length > 0 && status === "auto" ? "review" : status;

      if (duplicateTypes.length > 0) {
        notes.push(`Shared types detected in ${path.basename(file.path)}: ${duplicateTypes.join(", ")}`);
      }

      results.push({
        sourcePath: file.path,
        targetPath,
        status: finalStatus,
        output: rewritten,
        notes: translation.notes ?? [],
        warnings: translation.warnings ?? [],
        confidence: translation.confidence ?? 0
      });
    }

    const translatedCount = results.filter((result) => result.status === "auto").length;
    const reviewCount = results.filter((result) => result.status === "review").length;
    const skippedCount = results.filter((result) => result.status === "skip").length;

    return {
      analysis,
      files: results,
      translatedCount,
      reviewCount,
      skippedCount,
      notes
    };
  }

  async translateProject(
    structure: ProjectStructure,
    targetLanguage: ProjectTranslationResult["targetLanguage"],
    onProgress: (completed: number, total: number) => void
  ): Promise<ProjectTranslationResult> {
    this.queue = this.buildQueue(structure, targetLanguage);
    const total = this.queue.length;
    let completed = 0;
    this.nextJobIndex = 0;

    const workers = Array.from(
      { length: Math.min(MAX_CONCURRENCY, total || 1) },
      () => this.runWorker(structure, targetLanguage, () => {
        completed += 1;
        onProgress(completed, total);
      })
    );

    await Promise.all(workers);

    const translatedFiles = this.queue
      .map((job) => job.result)
      .filter((result): result is TranslatedFile => Boolean(result));
    const warnings = this.queue.flatMap((job) => job.result?.warnings ?? []);
    const failed = this.queue.filter((job) => job.status === "failed").length;
    const succeeded = this.queue.filter((job) => job.status === "done").length;

    return {
      rootPath: structure.rootPath,
      targetLanguage,
      files: translatedFiles,
      completed: succeeded,
      failed,
      warnings
    };
  }

  private async runWorker(
    structure: ProjectStructure,
    targetLanguage: ProjectTranslationResult["targetLanguage"],
    onJobDone: () => void
  ): Promise<void> {
    while (this.nextJobIndex < this.queue.length) {
      const job = this.nextJob();
      if (!job) {
        return;
      }
      job.status = "translating";
      try {
        job.result = await this.translateFile(job, structure, targetLanguage);
        job.status = "done";
      } catch (error) {
        job.status = "failed";
        job.error = error instanceof Error ? error.message : "Translation failed";
      } finally {
        onJobDone();
      }
    }
  }

  private nextJob(): TranslationJob | undefined {
    if (this.nextJobIndex >= this.queue.length) {
      return undefined;
    }
    const job = this.queue[this.nextJobIndex];
    this.nextJobIndex += 1;
    return job;
  }

  private buildQueue(structure: ProjectStructure, targetLanguage: ProjectTranslationResult["targetLanguage"]): TranslationJob[] {
    const priorities = this.computePriorities(structure);
    const jobs = structure.files.map((file) => ({
      sourceFile: file,
      targetLanguage,
      priority: priorities.get(file.path) ?? 1,
      status: "pending" as TranslationJobStatus
    }));

    return jobs.sort((left, right) => left.priority - right.priority);
  }

  private computePriorities(structure: ProjectStructure): Map<string, number> {
    const priorities = new Map<string, number>();
    const queue: Array<{ path: string; depth: number }> = structure.entryPoints.map((entry) => ({
      path: entry,
      depth: 0
    }));

    for (const entry of structure.entryPoints) {
      priorities.set(entry, 0);
    }

    while (queue.length > 0) {
      const current = queue.shift();
      if (!current) {
        continue;
      }
      const deps = structure.dependencies[current.path] ?? [];
      for (const dep of deps) {
        const nextDepth = current.depth + 1;
        const existing = priorities.get(dep);
        if (existing === undefined || nextDepth < existing) {
          priorities.set(dep, nextDepth);
          queue.push({ path: dep, depth: nextDepth });
        }
      }
    }

    return priorities;
  }

  private async translateFile(
    job: TranslationJob,
    structure: ProjectStructure,
    targetLanguage: ProjectTranslationResult["targetLanguage"]
  ): Promise<TranslatedFile> {
    const source = job.sourceFile;
    this.typeRegistry.registerFromSource(source.content, source.language, source.path);

    const translation = translateCode(source.language, targetLanguage, source.content);
    const rewritten = this.mapper.rewriteImports(translation.output, source.language, targetLanguage, {
      projectRoot: structure.rootPath,
      filePath: source.path
    });
    const targetPath = this.mapTargetPathInPlace(structure.rootPath, source.path, targetLanguage);
    const warnings = [...(translation.warnings ?? [])];
    const syntax = validateSyntax(targetLanguage, rewritten);
    if (!syntax.ok) {
      warnings.push(...syntax.details.map((detail) => `Syntax validation failed: ${detail}`));
    }

    return {
      originalPath: source.path,
      targetPath,
      content: rewritten,
      warnings,
      confidence: translation.confidence ?? 0
    };
  }

  private mapTargetPath(outputRoot: string, sourcePath: string, _from: string, to: string): string {
    const relative = path.relative(this.projectRoot, sourcePath);
    const ext = EXTENSION_MAP[to] ?? ".txt";
    const base = relative.replace(new RegExp(`${path.extname(relative)}$`), ext);
    return path.join(outputRoot, base);
  }

  private mapTargetPathInPlace(rootPath: string, sourcePath: string, target: string): string {
    const relative = path.relative(rootPath, sourcePath);
    const ext = EXTENSION_MAP[target] ?? ".txt";
    const base = relative.replace(new RegExp(`${path.extname(relative)}$`), ext);
    return path.join(rootPath, base);
  }

  private resolveStatus(
    confidence: number,
    warnings: string[],
    complexity: "simple" | "moderate" | "complex"
  ): TranslationStatus {
    if (warnings.length > 0 || complexity === "complex") {
      return "review";
    }
    if (confidence >= 0.7) {
      return "auto";
    }
    if (confidence > 0) {
      return "review";
    }
    return "skip";
  }

}

const MAX_CONCURRENCY = 4;
