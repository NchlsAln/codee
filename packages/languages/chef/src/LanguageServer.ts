import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "chef",
      command: "chef-language-server",
      args: ["--stdio"],
      projectPath,
    });
  }
}
