import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "awk",
      command: "awk-language-server",
      args: ["--stdio"],
      projectPath
    });
  }
}
