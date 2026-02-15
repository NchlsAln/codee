"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiFileRefactor = void 0;
const path_1 = __importDefault(require("path"));
const recast = __importStar(require("recast"));
const tsParser = __importStar(require("recast/parsers/typescript"));
const file_system_1 = require("./file-system");
const git_client_1 = require("./git-client");
const DEFAULT_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];
class MultiFileRefactor {
    projectRoot;
    fileSystem;
    gitClient;
    constructor(projectRoot, fileSystem, gitClient) {
        this.projectRoot = projectRoot;
        this.fileSystem = fileSystem ?? new file_system_1.NodeFileSystem();
        this.gitClient = gitClient ?? new git_client_1.NodeGitClient(projectRoot);
    }
    async renameSymbol(plan) {
        const extensions = plan.extensions ?? DEFAULT_EXTENSIONS;
        const files = await this.fileSystem.listFiles(this.projectRoot, extensions);
        const edits = [];
        const warnings = [];
        for (const filePath of files) {
            const source = await this.fileSystem.readFile(filePath);
            let updated = source;
            try {
                const ast = recast.parse(source, { parser: tsParser });
                const symbolName = plan.symbolName;
                const newName = plan.newName;
                recast.visit(ast, {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    visitIdentifier(pathNode) {
                        const node = pathNode.node;
                        if (node.name !== symbolName) {
                            return this.traverse(pathNode);
                        }
                        const parent = pathNode.parent?.node;
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
            }
            catch (error) {
                warnings.push(`Failed to parse ${filePath}: ${String(error)}`);
                continue;
            }
            if (updated !== source) {
                edits.push({ filePath, before: source, after: updated });
            }
        }
        return this.buildResult({ edits, warnings }, "Rename symbol");
    }
    async extractToNewFile(plan) {
        const source = await this.fileSystem.readFile(plan.sourceFile);
        const snippet = source.slice(plan.selectionStart, plan.selectionEnd);
        const exportBlock = `export const ${plan.exportName} = () => {\n${snippet}\n};\n`;
        const updatedSource = source.slice(0, plan.selectionStart) +
            `${plan.exportName}();\n` +
            source.slice(plan.selectionEnd);
        const edits = [
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
    async moveClass(plan) {
        const source = await this.fileSystem.readFile(plan.sourceFile);
        const classRegex = new RegExp(`class\\s+${plan.className}\\b[\\s\\S]*?\\n}`, "m");
        const match = source.match(classRegex);
        if (!match) {
            return this.buildResult({ edits: [], warnings: [`Class ${plan.className} not found.`] }, "Move class");
        }
        const classBlock = `export ${match[0]}\n`;
        const updatedSource = source.replace(match[0], "");
        const edits = [
            { filePath: plan.sourceFile, before: source, after: updatedSource },
            { filePath: plan.newFile, before: "", after: classBlock }
        ];
        return this.buildResult({ edits, warnings: [] }, "Move class");
    }
    async changeFunctionSignature(plan) {
        const source = await this.fileSystem.readFile(plan.sourceFile);
        const signatureRegex = new RegExp(`function\\s+${plan.functionName}\\s*\\(([^)]*)\\)`, "m");
        const updated = source.replace(signatureRegex, (fullMatch) => {
            const params = plan.newParameters.join(", ");
            return fullMatch.replace(/\(([^)]*)\)/, `(${params})`);
        });
        const edits = updated !== source
            ? [{ filePath: plan.sourceFile, before: source, after: updated }]
            : [];
        const confidence = {
            score: edits.length > 0 ? 0.55 : 0.3,
            rationale: "Signature change is regex-based and may need review."
        };
        return this.buildResult({ edits, warnings: [] }, "Change signature", confidence);
    }
    async applyChangeSet(changeSet, approved) {
        if (!approved) {
            return { applied: false, rolledBack: false, diff: "Approval not granted." };
        }
        for (const edit of changeSet.edits) {
            await this.fileSystem.writeFile(edit.filePath, edit.after);
        }
        const diff = await this.gitClient.diffPaths(changeSet.edits.map((edit) => edit.filePath));
        return { applied: true, rolledBack: false, diff };
    }
    async rollbackChangeSet(changeSet) {
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
    async buildResult(changeSet, intent, confidenceOverride) {
        const previewDiff = await this.buildPreviewDiff(changeSet);
        const confidence = confidenceOverride ??
            this.estimateConfidence({ editCount: changeSet.edits.length, warningCount: changeSet.warnings.length, intent });
        return {
            changeSet,
            previewDiff,
            confidence,
            requiresApproval: changeSet.edits.length > 0
        };
    }
    async buildPreviewDiff(changeSet) {
        if (changeSet.edits.length === 0) {
            return "No changes generated.";
        }
        const diffs = [];
        for (const edit of changeSet.edits) {
            const diff = await this.gitClient.diffText(edit.before, edit.after, edit.filePath);
            diffs.push(diff || `No diff for ${path_1.default.basename(edit.filePath)}`);
        }
        return diffs.join("\n");
    }
    estimateConfidence(details) {
        const base = details.editCount === 0 ? 0.2 : 0.75;
        const penalty = Math.min(details.warningCount * 0.15, 0.4);
        return {
            score: Math.max(0.1, base - penalty),
            rationale: `${details.intent} completed with ${details.warningCount} warnings.`
        };
    }
}
exports.MultiFileRefactor = MultiFileRefactor;
