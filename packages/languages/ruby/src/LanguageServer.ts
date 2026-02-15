import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "ruby", command: "ruby-language-server", args: ["--stdio"], projectPath });
  }
}
