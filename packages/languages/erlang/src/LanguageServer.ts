import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "erlang", command: "erlang-language-server", args: ["--stdio"], projectPath });
  }
}
