import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "zig", command: "zig-language-server", args: ["--stdio"], projectPath });
  }
}
