import { BaseLanguageServer } from "@codee/lang-common";

export interface RustToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: RustToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "rust", command: "rust-analyzer", args: [], projectPath });

    this.tooling = {
      formatter: "rustfmt",
      linter: "clippy",
      codeActions: ["organize-imports", "fix-all", "add-missing-impls"]
    };
  }
}

