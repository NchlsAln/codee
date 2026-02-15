import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "kotlin", command: "kotlin-language-server", args: ["--stdio"], projectPath });
  }
}
