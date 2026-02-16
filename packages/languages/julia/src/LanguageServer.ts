import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "julia", command: "julia-language-server", args: ["--stdio"], projectPath });
  }
}

