"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("typescript", {
            idioms: [
                "Prefer type inference when clear.",
                "Use interfaces for public contracts.",
                "Keep functions small and composable."
            ],
            templates: {
                "react.component": "import React from \"react\";\n\nexport const Component: React.FC = () => {\n  return (\n    <div>Component</div>\n  );\n};\n",
                "next.api": "import type { NextApiRequest, NextApiResponse } from \"next\";\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ ok: true });\n}\n",
                "vue.component": "<script setup lang=\"ts\">\nconst props = defineProps<{ message: string }>();\n</script>\n\n<template>\n  <div>{{ props.message }}</div>\n</template>\n"
            },
            frameworkTemplates: {
                "express.route": "import { Router } from \"express\";\n\nconst router = Router();\n\nrouter.get(\"/health\", (_req, res) => {\n  res.json({ ok: true });\n});\n\nexport default router;\n"
            },
            testTemplates: {
                jest: "import { describe, expect, it } from \"@jest/globals\";\n\ndescribe(\"subject\", () => {\n  it(\"works\", () => {\n    expect(true).toBe(true);\n  });\n});\n"
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
