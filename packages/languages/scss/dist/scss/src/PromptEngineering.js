"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("scss", {
            systemPrompt: "You are an SCSS expert. Use variables, mixins, and modules to build scalable styles.",
            fewShotExamples: [
                {
                    task: "Theme variables",
                    input: "colors",
                    output: "$color-primary: #0f62fe;\n$color-bg: #f7f7f7;"
                },
                {
                    task: "Mixin",
                    input: "card shadow",
                    output: "@mixin card-shadow($blur: 20px) { box-shadow: 0 10px $blur rgba(0,0,0,0.12); }"
                },
                {
                    task: "Nested component",
                    input: "button styles",
                    output: ".btn { &--primary { background: $color-primary; } }"
                }
            ],
            contextHints: [
                "Keep nesting shallow to avoid specificity issues.",
                "Prefer @use/@forward over @import.",
                "Use mixins for repeated patterns and functions for calculations.",
                "Document variables and design tokens clearly.",
                "Avoid @extend for large codebases to prevent selector bloat."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
