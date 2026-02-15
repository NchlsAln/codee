import path from "path";
import * as recast from "recast";
import * as tsParser from "recast/parsers/typescript";
import { FileSystem, NodeFileSystem } from "./file-system";
import { GitClient, NodeGitClient } from "./git-client";
import {
  ChangeSet,
  ChangeSetResult,
  ChangeSignaturePlan,
  ConfidenceScore,
  ExtractToNewFilePlan,
  MoveClassPlan,
  RefactorResult,
  RenameSymbolPlan
} from "./types";

const DEFAULT_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

export class MultiFileRefactor {
  private readonly fileSystem: FileSystem;
  private readonly gitClient: GitClient;

  constructor(private readonly projectRoot: string, fileSystem?: FileSystem, gitClient?: GitClient) {
    this.fileSystem = fileSystem ?? new NodeFileSystem();
    this.gitClient = gitClient ?? new NodeGitClient(projectRoot);
  }

  async renameSymbol(plan: RenameSymbolPlan): Promise<RefactorResult> {
    const extensions = plan.extensions ?? DEFAULT_EXTENSIONS;
    const files = await this.fileSystem.listFiles(this.projectRoot, extensions);
    const edits: ChangeSet["edits"] = [];
    const warnings: string[] = [];

    for (const filePath of files) {
      const source = await this.fileSystem.readFile(filePath);
      let updated = source;
      try {
        const ast = recast.parse(source, { parser: tsParser });
        const symbolName = plan.symbolName;
        const newName = plan.newName;
        recast.visit(ast, {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          visitIdentifier(pathNode: any) {
            const node = pathNode.node as recast.types.namedTypes.Identifier;
            if (node.name !== symbolName) {
              return this.traverse(pathNode);
            }
            const parent = pathNode.parent?.node as
              | { type?: string; key?: unknown; property?: unknown; computed?: boolean }
              | undefined;
            if (parent?.type === "MemberExpression" && parent.property === pathNode.node && parent.computed === false) {
              return false;
            }
            if (parent?.type === "Property" && parent.key === pathNode.node && parent.computed === false) {
              return false;
            }
            if (parent?.type === "ObjectProperty" && parent.key === pathNode.node && parent.computed === false) {
              return false;
            }
            if (parent?.type === "PropertyDefinition" && parent.key === pathNode.node && parent.computed === false) {
              return false;
            }
            if (parent?.type === "TSPropertySignature" && parent.key === pathNode.node) {
              return false;
            }
            node.name = newName;
            return false;
          }
        });
        updated = recast.print(ast).code;
      } catch (error) {
        warnings.push(`Failed to parse ${filePath}: ${String(error)}`);
        continue;
      }

      if (updated !== source) {
        edits.push({ filePath, before: source, after: updated });
      }
    }

    return this.buildResult({ edits, warnings }, "Rename symbol");
  }

  async extractToNewFile(plan: ExtractToNewFilePlan): Promise<RefactorResult> {
    const source = await this.fileSystem.readFile(plan.sourceFile);
    const snippet = source.slice(plan.selectionStart, plan.selectionEnd);

    const exportBlock = `export const ${plan.exportName} = () => {\n${snippet}\n};\n`;
    const updatedSource =
      source.slice(0, plan.selectionStart) +
      `${plan.exportName}();\n` +
      source.slice(plan.selectionEnd);

    const edits: ChangeSet["edits"] = [
      {
        filePath: plan.sourceFile,
        before: source,
        after: updatedSource
      },
      {
        filePath: plan.newFile,
        before: "",
        after: exportBlock
      }
    ];

    return this.buildResult({ edits, warnings: [] }, "Extract to new file");
  }

  async moveClass(plan: MoveClassPlan): Promise<RefactorResult> {
    const source = await this.fileSystem.readFile(plan.sourceFile);
    const classRegex = new RegExp(`class\\s+${plan.className}\\b[\\s\\S]*?\\n}`, "m");
    const match = source.match(classRegex);

    if (!match) {
      return this.buildResult({ edits: [], warnings: [`Class ${plan.className} not found.`] }, "Move class");
    }

    const classBlock = `export ${match[0]}\n`;
    const updatedSource = source.replace(match[0], "");
    const edits: ChangeSet["edits"] = [
      { filePath: plan.sourceFile, before: source, after: updatedSource },
      { filePath: plan.newFile, before: "", after: classBlock }
    ];

    return this.buildResult({ edits, warnings: [] }, "Move class");
  }

  async changeFunctionSignature(plan: ChangeSignaturePlan): Promise<RefactorResult> {
    const source = await this.fileSystem.readFile(plan.sourceFile);
    const signatureRegex = new RegExp(`function\\s+${plan.functionName}\\s*\\(([^)]*)\\)`, "m");
    const updated = source.replace(signatureRegex, (fullMatch) => {
      const params = plan.newParameters.join(", ");
      return fullMatch.replace(/\(([^)]*)\)/, `(${params})`);
    });

    const edits: ChangeSet["edits"] =
      updated !== source
        ? [{ filePath: plan.sourceFile, before: source, after: updated }]
        : [];

    const confidence: ConfidenceScore = {
      score: edits.length > 0 ? 0.55 : 0.3,
      rationale: "Signature change is regex-based and may need review."
    };

    return this.buildResult({ edits, warnings: [] }, "Change signature", confidence);
  }

  async applyChangeSet(changeSet: ChangeSet, approved: boolean): Promise<ChangeSetResult> {
    if (!approved) {
      return { applied: false, rolledBack: false, diff: "Approval not granted." };
    }

    for (const edit of changeSet.edits) {
      await this.fileSystem.writeFile(edit.filePath, edit.after);
    }

    const diff = await this.gitClient.diffPaths(changeSet.edits.map((edit) => edit.filePath));
    return { applied: true, rolledBack: false, diff };
  }

  async rollbackChangeSet(changeSet: ChangeSet): Promise<ChangeSetResult> {
    const filePaths = changeSet.edits.map((edit) => edit.filePath);
    if (await this.gitClient.isGitRepo()) {
      await this.gitClient.checkout(filePaths);
      const diff = await this.gitClient.diffPaths(filePaths);
      return { applied: false, rolledBack: true, diff };
    }

    for (const edit of changeSet.edits) {
      await this.fileSystem.writeFile(edit.filePath, edit.before);
    }

    return { applied: false, rolledBack: true, diff: "Rolled back using stored edits." };
  }

  private async buildResult(
    changeSet: ChangeSet,
    intent: string,
    confidenceOverride?: ConfidenceScore
  ): Promise<RefactorResult> {
    const previewDiff = await this.buildPreviewDiff(changeSet);
    const confidence =
      confidenceOverride ??
      this.estimateConfidence({ editCount: changeSet.edits.length, warningCount: changeSet.warnings.length, intent });
    return {
      changeSet,
      previewDiff,
      confidence,
      requiresApproval: changeSet.edits.length > 0
    };
  }

  private async buildPreviewDiff(changeSet: ChangeSet): Promise<string> {
    if (changeSet.edits.length === 0) {
      return "No changes generated.";
    }
    const diffs: string[] = [];
    for (const edit of changeSet.edits) {
      const diff = await this.gitClient.diffText(edit.before, edit.after, edit.filePath);
      diffs.push(diff || `No diff for ${path.basename(edit.filePath)}`);
    }
    return diffs.join("\n");
  }

  private estimateConfidence(details: { editCount: number; warningCount: number; intent: string }): ConfidenceScore {
    const base = details.editCount === 0 ? 0.2 : 0.75;
    const penalty = Math.min(details.warningCount * 0.15, 0.4);
    return {
      score: Math.max(0.1, base - penalty),
      rationale: `${details.intent} completed with ${details.warningCount} warnings.`
    };
  }
}
