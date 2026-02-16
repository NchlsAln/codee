import { BaseLanguageServer } from "@codee/lang-common";

export interface SwiftToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: SwiftToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "swift", command: "sourcekit-lsp", args: [], projectPath });

    this.tooling = {
      formatter: "swiftformat",
      linter: "swiftlint",
      codeActions: ["organize-imports", "fix-all", "convert-to-async"]
    };
  }
}
