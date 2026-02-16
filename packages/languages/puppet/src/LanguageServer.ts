import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "puppet",
      command: "puppet-language-server",
      args: ["--stdio"],
      projectPath,
    });
  }
}
