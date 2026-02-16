import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "lua", command: "lua-language-server", args: ["--stdio"], projectPath });
  }
}

