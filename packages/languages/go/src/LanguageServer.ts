import { BaseLanguageServer } from "@codee/lang-common";

export interface GoToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: GoToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "go", command: "gopls", args: [], projectPath });

    this.tooling = {
      formatter: "gofmt",
      linter: "golangci-lint",
      codeActions: ["organize-imports", "fix-all", "extract-function"]
    };
  }
}

