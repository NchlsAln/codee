import { BaseLanguageServer } from "@codee/lang-common";

export interface JavaToolingConfig {
  formatter: string;
  linter: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: JavaToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "java", command: "jdtls", args: [], projectPath });

    this.tooling = {
      formatter: "google-java-format",
      linter: "spotbugs",
      codeActions: ["organize-imports", "fix-all", "generate-getters-setters"]
    };
  }
}

