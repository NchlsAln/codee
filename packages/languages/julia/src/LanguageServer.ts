import { BaseLanguageServer } from "@codee/lang-common";

export interface JuliaToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: JuliaToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "julia", command: "julia-language-server", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "juliafmt",
      linter: "aqua",
      typeChecker: "jet",
      codeActions: ["organize-imports", "fix-all", "add-types"]
    };
  }
}

