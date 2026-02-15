import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "cpp", command: "cpp-language-server", args: ["--stdio"], projectPath });
  }
}
