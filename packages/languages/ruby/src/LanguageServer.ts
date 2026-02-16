import { BaseLanguageServer } from "@codee/lang-common";

export interface RubyToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: RubyToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "ruby", command: "solargraph", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "rubocop",
      linter: "rubocop",
      typeChecker: "sorbet",
      codeActions: ["organize-imports", "fix-all", "add-signatures"]
    };
  }
}

