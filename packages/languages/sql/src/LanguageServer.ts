import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "sql", command: "sql-language-server", args: ["--stdio"], projectPath });
  }
}
