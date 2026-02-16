import { BaseLanguageServer } from "@codee/lang-common";

export interface HaskellToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: HaskellToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "haskell", command: "haskell-language-server", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "ormolu",
      linter: "hlint",
      typeChecker: "ghc -fno-code",
      codeActions: ["organize-imports", "fix-all", "add-types"]
    };
  }
}

