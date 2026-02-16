import { BaseLanguageServer } from "@codee/lang-common";

export interface ScalaToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: ScalaToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "scala", command: "metals", args: ["-Dmetals.client=codee"], projectPath });

    this.tooling = {
      formatter: "scalafmt",
      linter: "scapegoat",
      codeActions: ["organize-imports", "fix-all", "convert-to-val"]
    };
  }
}
