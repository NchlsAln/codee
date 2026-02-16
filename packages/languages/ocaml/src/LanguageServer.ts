import { BaseLanguageServer } from "@codee/lang-common";

export interface OcamlToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: OcamlToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "ocaml", command: "ocamllsp", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "ocamlformat",
      linter: "ocamlformat --check",
      typeChecker: "dune build",
      codeActions: ["organize-imports", "fix-all", "add-types"]
    };
  }
}

