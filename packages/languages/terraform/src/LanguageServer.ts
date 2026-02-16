import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "terraform",
      command: "terraform-ls",
      args: ["serve"],
      projectPath,
    });
  }
}
