import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "csharp", command: "csharp-language-server", args: ["--stdio"], projectPath });
  }
}
