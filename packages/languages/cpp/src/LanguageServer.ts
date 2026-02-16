import { BaseLanguageServer } from "@codee/lang-common";

export interface CppToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: CppToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "cpp", command: "clangd", args: [], projectPath });

    this.tooling = {
      formatter: "clang-format",
      linter: "clang-tidy",
      codeActions: ["organize-includes", "fix-all", "modernize-usage"]
    };
  }
}

