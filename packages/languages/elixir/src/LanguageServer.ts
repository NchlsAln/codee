import { BaseLanguageServer } from "@codee/lang-common";

export interface ElixirToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: ElixirToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "elixir", command: "elixir-ls", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "mix format",
      linter: "credo",
      typeChecker: "dialyzer",
      codeActions: ["organize-imports", "fix-all", "add-specs"]
    };
  }
}

