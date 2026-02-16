import { BaseLanguageServer } from "@codee/lang-common";

export interface ZigToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: ZigToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "zig", command: "zls", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "zig fmt",
      linter: "zig fmt --check",
      typeChecker: "zig build",
      codeActions: ["organize-imports", "fix-all", "add-error-context"]
    };
  }
}

