import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "sql", command: "sql-language-server", args: ["--stdio"], projectPath });
  }
}

