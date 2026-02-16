import { BaseLanguageServer } from "@codee/lang-common";

export interface SqlToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: SqlToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "sql", command: "sqls", args: ["-l", "en"], projectPath });

    this.tooling = {
      formatter: "sqlfluff format",
      linter: "sqlfluff lint",
      typeChecker: "engine-validate",
      codeActions: ["format", "fix-all", "organize-columns"]
    };
  }
}

