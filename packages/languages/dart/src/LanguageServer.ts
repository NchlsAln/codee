import { BaseLanguageServer } from "@codee/lang-common";

export interface DartToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: DartToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "dart", command: "dart", args: ["language-server", "--protocol=lsp"], projectPath });

    this.tooling = {
      formatter: "dart format",
      linter: "dart analyze",
      codeActions: ["organize-imports", "fix-all", "add-lints"]
    };
  }
}
