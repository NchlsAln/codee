import { BaseLanguageServer } from "@codee/lang-common";

export interface PhpToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: PhpToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "php", command: "intelephense", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "php-cs-fixer",
      linter: "phpstan",
      typeChecker: "psalm",
      codeActions: ["organize-imports", "fix-all", "add-missing-types"]
    };
  }
}

