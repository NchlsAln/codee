import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "java", command: "java-language-server", args: ["--stdio"], projectPath });
  }
}
