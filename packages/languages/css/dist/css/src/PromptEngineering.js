"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("css", {
            systemPrompt: "You are a CSS expert. Emphasize maintainable architecture, responsive design, and accessibility.",
            fewShotExamples: [
                {
                    task: "Responsive card",
                    input: "card layout",
                    output: ".card { display: grid; gap: 1rem; padding: 1.5rem; border-radius: 12px; }"
                },
                {
                    task: "Theming",
                    input: "dark mode",
                    output: ":root { --bg: #fff; } [data-theme='dark'] { --bg: #111; }"
                },
                {
                    task: "Animation",
                    input: "fade in",
                    output: "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }"
                }
            ],
            contextHints: [
                "Prefer BEM or utility conventions for large stylesheets.",
                "Use flexbox/grid for layout instead of floats.",
                "Avoid !important; refactor specificity instead.",
                "Use clamp() for fluid typography when appropriate.",
                "Respect prefers-reduced-motion for animations."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
