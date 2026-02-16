import { BaseLanguageServer } from "@codee/lang-common";

export interface KotlinToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: KotlinToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "kotlin", command: "kotlin-language-server", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "ktlint",
      linter: "detekt",
      codeActions: ["organize-imports", "fix-all", "convert-to-expression-body"]
    };
  }
}
