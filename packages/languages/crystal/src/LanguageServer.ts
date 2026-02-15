import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "crystal", command: "crystal-language-server", args: ["--stdio"], projectPath });
  }
}
