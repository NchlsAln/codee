import { BaseLanguageServer } from "@codee/lang-common";

export interface RToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: RToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "r", command: "r-language-server", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "styler",
      linter: "lintr",
      typeChecker: "lintr",
      codeActions: ["organize-imports", "fix-all", "add-roxygen"]
    };
  }
}

