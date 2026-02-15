import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "scala", command: "scala-language-server", args: ["--stdio"], projectPath });
  }
}
