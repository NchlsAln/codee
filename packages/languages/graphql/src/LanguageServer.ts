import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "graphql", command: "graphql-language-server", args: ["--stdio"], projectPath });
  }
}

