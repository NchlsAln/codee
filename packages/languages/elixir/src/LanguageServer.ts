import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "elixir", command: "elixir-ls", args: ["--stdio"], projectPath });
  }
}

