import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "graphql", command: "graphql-language-server", args: ["--stdio"], projectPath });
  }
}
