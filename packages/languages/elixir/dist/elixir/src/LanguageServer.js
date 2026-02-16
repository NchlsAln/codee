"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "elixir", command: "elixir-ls", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "mix format",
            linter: "credo",
            typeChecker: "dialyzer",
            codeActions: ["organize-imports", "fix-all", "add-specs"]
        };
    }
}
exports.LanguageServer = LanguageServer;
