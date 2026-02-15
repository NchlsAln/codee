"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeContextAssembler = void 0;
const PromptSanitizer_1 = require("../security/PromptSanitizer");
class CodeContextAssembler {
    projectIndex;
    vectorMemory;
    conversationMemory;
    compressor;
    constructor(projectIndex, vectorMemory, conversationMemory, compressor) {
        this.projectIndex = projectIndex;
        this.vectorMemory = vectorMemory;
        this.conversationMemory = conversationMemory;
        this.compressor = compressor;
    }
    async assemble(options) {
        const sections = [];
        sections.push({
            id: "system",
            title: "System",
            content: options.systemPrompt,
            priority: 10
        });
        const projectSummary = await this.buildProjectSummary(options.projectPath);
        sections.push({
            id: "project",
            title: "Project Summary",
            content: projectSummary,
            priority: 8
        });
        if (options.filePath) {
            const fileContent = await this.projectIndex.getFileContent(options.filePath);
            const sanitized = (0, PromptSanitizer_1.wrapUntrustedContent)(options.filePath, fileContent);
            sections.push({
                id: "current-file",
                title: "Current File",
                content: sanitized,
                priority: 9
            });
        }
        const results = await this.vectorMemory.search(options.userQuery, 6);
        if (results.length > 0) {
            const related = results
                .map((result) => (0, PromptSanitizer_1.wrapUntrustedContent)(result.document.filePath, `File: ${result.document.filePath}\n${result.document.content}`))
                .join("\n\n");
            sections.push({
                id: "retrieved",
                title: "Relevant Files",
                content: related,
                priority: 7
            });
        }
        if (options.conversationId) {
            const messages = await this.conversationMemory.getMessages(options.conversationId);
            const history = messages.map((message) => `${message.role}: ${message.content}`).join("\n");
            sections.push({
                id: "history",
                title: "Conversation History",
                content: history,
                priority: 6
            });
        }
        if (options.diagnostics && options.diagnostics.length > 0) {
            const diagnostics = options.diagnostics
                .map((diag) => `${diag.severity.toUpperCase()} ${diag.line}:${diag.character} ${diag.message}`)
                .join("\n");
            sections.push({
                id: "diagnostics",
                title: "Diagnostics",
                content: diagnostics,
                priority: 7
            });
        }
        sections.push({
            id: "query",
            title: "User Query",
            content: options.userQuery,
            priority: 10
        });
        const compressed = this.compressor.compress(sections, options.tokenBudget);
        return compressed
            .map((section) => `## ${section.title}\n${section.content}`)
            .join("\n\n");
    }
    async buildProjectSummary(projectPath) {
        const snapshot = this.projectIndex.getSnapshot(projectPath);
        const languages = new Set(snapshot.files.map((file) => file.languageId));
        return `Files: ${snapshot.files.length}\nLanguages: ${Array.from(languages).join(", ")}`;
    }
}
exports.CodeContextAssembler = CodeContextAssembler;
