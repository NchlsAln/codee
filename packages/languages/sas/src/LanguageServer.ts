import { BaseLanguageServer } from "@codee/lang-common";

export interface SasToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: SasToolingConfig;

  constructor(projectPath?: string) {
    super({
      languageId: "sas",
      command: "sas-language-server",
      args: [],
      projectPath
    });

    this.tooling = {
      formatter: "sas-studio",
      linter: "sas-studio",
      typeChecker: "sas-compiler",
      codeActions: ["format", "fix-all"]
    };
  }
}
