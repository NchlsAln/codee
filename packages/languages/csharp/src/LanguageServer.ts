import { BaseLanguageServer } from "@codee/lang-common";

export interface CsharpToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: CsharpToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "csharp", command: "omnisharp", args: ["-lsp"], projectPath });

    this.tooling = {
      formatter: "dotnet format",
      linter: "roslyn-analyzers",
      codeActions: ["organize-usings", "fix-all", "convert-to-file-scoped-namespace"]
    };
  }
}
