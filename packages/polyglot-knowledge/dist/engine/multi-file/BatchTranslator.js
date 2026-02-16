"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchTranslator = void 0;
const node_path_1 = __importDefault(require("node:path"));
const index_1 = require("../../index");
const syntax_validator_1 = require("../../validators/syntax-validator");
const ProjectAnalyzer_1 = require("./ProjectAnalyzer");
const ImportModuleMapper_1 = require("./ImportModuleMapper");
const TypeRegistry_1 = require("./TypeRegistry");
const EXTENSION_MAP = {
    python: ".py",
    typescript: ".ts",
    rust: ".rs",
    go: ".go",
    java: ".java",
    cpp: ".cpp",
    javascript: ".js"
};
class BatchTranslator {
    projectRoot;
    analyzer;
    mapper = new ImportModuleMapper_1.ImportModuleMapper();
    typeRegistry = new TypeRegistry_1.TypeRegistry();
    queue = [];
    nextJobIndex = 0;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
        this.analyzer = new ProjectAnalyzer_1.ProjectAnalyzer(projectRoot);
    }
    async translate(options) {
        const analysis = await this.analyzer.analyze(options.projectRoot, options.from);
        const total = analysis.files.length;
        const results = [];
        const notes = [];
        for (const [index, file] of analysis.files.entries()) {
            options.onProgress?.(`Translating ${index + 1} of ${total} files...`, index + 1, total);
            const definitions = this.typeRegistry.registerFromSource(file.content, options.from, file.path);
            const translation = (0, index_1.translateCode)(options.from, options.to, file.content);
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
                notes.push(`Shared types detected in ${node_path_1.default.basename(file.path)}: ${duplicateTypes.join(", ")}`);
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
    async translateProject(structure, targetLanguage, onProgress) {
        this.queue = this.buildQueue(structure, targetLanguage);
        const total = this.queue.length;
        let completed = 0;
        this.nextJobIndex = 0;
        const workers = Array.from({ length: Math.min(MAX_CONCURRENCY, total || 1) }, () => this.runWorker(structure, targetLanguage, () => {
            completed += 1;
            onProgress(completed, total);
        }));
        await Promise.all(workers);
        const translatedFiles = this.queue
            .map((job) => job.result)
            .filter((result) => Boolean(result));
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
    async runWorker(structure, targetLanguage, onJobDone) {
        while (this.nextJobIndex < this.queue.length) {
            const job = this.nextJob();
            if (!job) {
                return;
            }
            job.status = "translating";
            try {
                job.result = await this.translateFile(job, structure, targetLanguage);
                job.status = "done";
            }
            catch (error) {
                job.status = "failed";
                job.error = error instanceof Error ? error.message : "Translation failed";
            }
            finally {
                onJobDone();
            }
        }
    }
    nextJob() {
        if (this.nextJobIndex >= this.queue.length) {
            return undefined;
        }
        const job = this.queue[this.nextJobIndex];
        this.nextJobIndex += 1;
        return job;
    }
    buildQueue(structure, targetLanguage) {
        const priorities = this.computePriorities(structure);
        const jobs = structure.files.map((file) => ({
            sourceFile: file,
            targetLanguage,
            priority: priorities.get(file.path) ?? 1,
            status: "pending"
        }));
        return jobs.sort((left, right) => left.priority - right.priority);
    }
    computePriorities(structure) {
        const priorities = new Map();
        const queue = structure.entryPoints.map((entry) => ({
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
    async translateFile(job, structure, targetLanguage) {
        const source = job.sourceFile;
        this.typeRegistry.registerFromSource(source.content, source.language, source.path);
        const translation = (0, index_1.translateCode)(source.language, targetLanguage, source.content);
        const rewritten = this.mapper.rewriteImports(translation.output, source.language, targetLanguage, {
            projectRoot: structure.rootPath,
            filePath: source.path
        });
        const targetPath = this.mapTargetPathInPlace(structure.rootPath, source.path, targetLanguage);
        const warnings = [...(translation.warnings ?? [])];
        const syntax = (0, syntax_validator_1.validateSyntax)(targetLanguage, rewritten);
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
    mapTargetPath(outputRoot, sourcePath, _from, to) {
        const relative = node_path_1.default.relative(this.projectRoot, sourcePath);
        const ext = EXTENSION_MAP[to] ?? ".txt";
        const base = relative.replace(new RegExp(`${node_path_1.default.extname(relative)}$`), ext);
        return node_path_1.default.join(outputRoot, base);
    }
    mapTargetPathInPlace(rootPath, sourcePath, target) {
        const relative = node_path_1.default.relative(rootPath, sourcePath);
        const ext = EXTENSION_MAP[target] ?? ".txt";
        const base = relative.replace(new RegExp(`${node_path_1.default.extname(relative)}$`), ext);
        return node_path_1.default.join(rootPath, base);
    }
    resolveStatus(confidence, warnings, complexity) {
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
exports.BatchTranslator = BatchTranslator;
const MAX_CONCURRENCY = 4;
