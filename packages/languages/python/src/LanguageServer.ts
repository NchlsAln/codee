import { BaseLanguageServer } from "@codee/lang-common";

export interface PythonToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: PythonToolingConfig;

  constructor(projectPath?: string) {
    super({
      languageId: "python",
      command: "pylsp",
      args: [],
      projectPath
    });

    this.tooling = {
      formatter: "black",
      linter: "ruff",
      typeChecker: "mypy",
      codeActions: ["organize-imports", "add-missing-types", "fix-all"]
    };
  }
}