import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "julia", command: "julia-language-server", args: ["--stdio"], projectPath });
  }
}
