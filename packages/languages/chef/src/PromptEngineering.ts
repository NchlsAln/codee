import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("chef", {
      systemPrompt:
        "You are a Chef expert. Emphasize convergent resources, policyfiles, and secure automation.",
      fewShotExamples: [
        {
          task: "Package",
          input: "install nginx",
          output: "package 'nginx' do\n  action :install\nend",
        },
        {
          task: "Service",
          input: "enable service",
          output: "service 'nginx' do\n  action [:enable, :start]\nend",
        },
      ],
      contextHints: [
        "Use custom resources for reuse.",
        "Prefer policyfiles for dependency control.",
        "Avoid search in large fleets when possible.",
        "Keep recipes small and focused.",
        "Use templates and attributes for configuration.",
      ],
    });
  }
}
