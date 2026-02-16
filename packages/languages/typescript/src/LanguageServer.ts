import { BaseLanguageServer } from "@codee/lang-common";

export interface TypeScriptToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: TypeScriptToolingConfig;

  constructor(projectPath?: string) {
    super({
      languageId: "typescript",
      command: "typescript-language-server",
      args: ["--stdio"],
      projectPath
    });

    this.tooling = {
      formatter: "prettier",
      linter: "eslint",
      codeActions: ["organize-imports", "fix-all", "convert-to-optional-chain"]
    };
  }
}