import { BaseLanguageServer } from "@codee/lang-common";

export interface NimToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: NimToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "nim", command: "nimlsp", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "nimpretty",
      linter: "nim check",
      typeChecker: "nim check",
      codeActions: ["organize-imports", "fix-all", "add-types"]
    };
  }
}

