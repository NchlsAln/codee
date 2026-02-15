import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "elixir", command: "elixir-language-server", args: ["--stdio"], projectPath });
  }
}
