import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("yaml", {
      systemPrompt: "You are a YAML expert. Focus on readable, validated configuration and schema alignment.",
      fewShotExamples: [
        {
          task: "App config",
          input: "database config",
          output: "database:\n  host: localhost\n  port: 5432\n  ssl: false"
        },
        {
          task: "Kubernetes",
          input: "deployment",
          output: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app"
        },
        {
          task: "List",
          input: "servers",
          output: "servers:\n  - host: a.example.com\n  - host: b.example.com"
        }
      ],
      contextHints: [
        "Use two-space indentation consistently.",
        "Quote values that could be mis-typed (yes/no, on/off).",
        "Prefer anchors for repeated blocks.",
        "Align with schema (Kubernetes/OpenAPI) when available.",
        "Avoid tabs; they are invalid in YAML."
      ]
    });
  }
}

