"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaturalLanguageToCode = void 0;
class NaturalLanguageToCode {
    correctionStore;
    constructor(correctionStore) {
        this.correctionStore = correctionStore;
    }
    async plan(prompt, language) {
        const steps = [
            "Clarify inputs, outputs, and constraints.",
            "Sketch the data flow and error handling.",
            "Write a small implementation skeleton.",
            "Iterate with tests and formatting."
        ];
        const skeleton = language === "python"
            ? [
                "from typing import Any",
                "",
                "def main(request: dict[str, Any]) -> dict[str, Any]:",
                "    # Implement business logic",
                "    return {\"ok\": True}",
                ""
            ].join("\n")
            : [
                "export type Request = Record<string, unknown>;",
                "",
                "export function main(request: Request): Record<string, unknown> {",
                "  // Implement business logic",
                "  return { ok: true };",
                "}",
                ""
            ].join("\n");
        const warnings = ["Generated skeleton requires human validation and tests."];
        if (this.correctionStore) {
            warnings.push("Correction feedback will be tracked for future planning.");
        }
        const confidence = {
            score: 0.5,
            rationale: "Natural language plan is generic until refined with project context."
        };
        return { steps, skeleton, warnings, confidence };
    }
}
exports.NaturalLanguageToCode = NaturalLanguageToCode;
