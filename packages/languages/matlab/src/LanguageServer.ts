import { BaseLanguageServer } from "@codee/lang-common";

export interface MatlabToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: MatlabToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "matlab", command: "matlab-language-server", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "matlab.format",
      linter: "mlint",
      typeChecker: "codeAnalyzer",
      codeActions: ["organize-imports", "fix-all", "add-types"]
    };
  }
}

