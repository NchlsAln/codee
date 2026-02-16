import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("dockerfile", {
      systemPrompt:
        "You are a Dockerfile expert. Optimize for small, secure, cache-friendly images and build performance.",
      fewShotExamples: [
        {
          task: "Multi-stage build",
          input: "node app",
          output:
            "FROM node:20-alpine AS build\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nFROM node:20-alpine\nCOPY --from=build /app/dist /app/dist",
        },
      ],
      contextHints: [
        "Order COPY/RUN for cache efficiency.",
        "Use .dockerignore to slim build context.",
        "Pin base image tags and package versions.",
        "Avoid secrets in ARG/ENV; use BuildKit secrets.",
        "Run as non-root user where possible.",
      ],
    });
  }
}
