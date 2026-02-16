import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "sed",
      command: "sed-language-server",
      args: ["--stdio"],
      projectPath
    });
  }
}
