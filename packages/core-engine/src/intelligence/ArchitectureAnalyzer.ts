import { FileSystem, NodeFileSystem } from "./file-system";
import { ArchitectureReport, ConfidenceScore } from "./types";

export class ArchitectureAnalyzer {
  constructor(private readonly projectRoot: string, private readonly fileSystem: FileSystem = new NodeFileSystem()) {}

  async analyze(): Promise<ArchitectureReport> {
    const files = await this.fileSystem.listFiles(this.projectRoot);
    const components = this.detectComponents(files);
    const dependencies = this.detectDependencies(files);
    const risks = this.detectRisks(files);
    const suggestions = this.buildSuggestions(components, risks);

    const confidence: ConfidenceScore = {
      score: 0.6,
      rationale: "Architecture analysis based on file and folder heuristics."
    };

    return {
      summary: `Detected ${components.length} components across ${files.length} files.`,
      components,
      dependencies,
      risks,
      suggestions,
      confidence
    };
  }

  private detectComponents(files: string[]): string[] {
    const buckets = new Set<string>();
    for (const file of files) {
      const normalized = file.toLowerCase();
      if (normalized.includes("/services/") || normalized.includes("\\services\\")) {
        buckets.add("Services");
      }
      if (normalized.includes("/controllers/") || normalized.includes("\\controllers\\")) {
        buckets.add("Controllers");
      }
      if (normalized.includes("/providers/") || normalized.includes("\\providers\\")) {
        buckets.add("Providers");
      }
      if (normalized.includes("/panels/") || normalized.includes("\\panels\\")) {
        buckets.add("UI Panels");
      }
      if (normalized.includes("/engine/") || normalized.includes("\\engine\\")) {
        buckets.add("Core Engine");
      }
    }
    return Array.from(buckets.values());
  }

  private detectDependencies(files: string[]): string[] {
    const deps = new Set<string>();
    for (const file of files) {
      if (file.endsWith("package.json")) {
        deps.add("npm packages");
      }
      if (file.toLowerCase().includes("docker")) {
        deps.add("Docker");
      }
      if (file.toLowerCase().includes(".github")) {
        deps.add("GitHub Actions");
      }
    }
    return Array.from(deps.values());
  }

  private detectRisks(files: string[]): string[] {
    const risks: string[] = [];
    const hasTests = files.some((file) => file.includes("__tests__") || file.includes("test"));
    if (!hasTests) {
      risks.push("Limited automated test coverage detected.");
    }
    const hasDocs = files.some((file) => file.toLowerCase().includes("docs"));
    if (!hasDocs) {
      risks.push("Documentation folder not detected.");
    }
    return risks;
  }

  private buildSuggestions(components: string[], risks: string[]): string[] {
    const suggestions: string[] = [];
    if (components.length === 0) {
      suggestions.push("Define a clearer module boundary and folder structure.");
    }
    if (risks.some((risk) => risk.includes("test"))) {
      suggestions.push("Add a minimal regression test suite for core workflows.");
    }
    return suggestions;
  }
}
