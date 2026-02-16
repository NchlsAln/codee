import { BaseLanguageServer } from "@codee/lang-common";

export interface ErlangToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: ErlangToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "erlang", command: "erlang_ls", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "erlfmt",
      linter: "elvis",
      typeChecker: "dialyzer",
      codeActions: ["organize-imports", "fix-all", "add-specs"]
    };
  }
}

