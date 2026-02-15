import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "lua", command: "lua-language-server", args: ["--stdio"], projectPath });
  }
}
