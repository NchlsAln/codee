import { BaseLanguageServer } from "@codee/lang-common";

export interface CrystalToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: CrystalToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "crystal", command: "crystalline", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "crystal tool format",
      linter: "ameba",
      typeChecker: "crystal build",
      codeActions: ["organize-imports", "fix-all", "add-types"]
    };
  }
}

