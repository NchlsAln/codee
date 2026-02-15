"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentationGenerator = void 0;
class DocumentationGenerator {
    generate(options) {
        const readme = [
            `# ${options.projectName}`,
            "",
            options.overview,
            "",
            "## Quick Start",
            "",
            "- Install dependencies",
            "- Run tests",
            "- Build the project",
            "",
            "## Key Entry Points",
            "",
            ...options.entryPoints.map((entry) => `- ${entry}`),
            "",
            "## Operational Notes",
            "",
            "- Follow project guidelines for configuration and secrets.",
            "- Use feature flags for risky refactors.",
            ""
        ].join("\n");
        const apiDoc = [
            "# API Overview",
            "",
            "## Modules",
            "",
            "- Core Engine",
            "- Intelligence",
            "- Language Support",
            "",
            "## Common Workflows",
            "",
            "- Request analysis",
            "- Propose changes",
            "- Apply changes after approval",
            ""
        ].join("\n");
        const changelog = [
            "# Changelog",
            "",
            "## Unreleased",
            "",
            "- Generated documentation bundle.",
            ""
        ].join("\n");
        const confidence = {
            score: 0.55,
            rationale: "Documentation is scaffolded and needs project-specific detail."
        };
        return { readme, apiDoc, changelog, confidence };
    }
}
exports.DocumentationGenerator = DocumentationGenerator;
