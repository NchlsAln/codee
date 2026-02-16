"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "csharp", command: "omnisharp", args: ["-lsp"], projectPath });
        this.tooling = {
            formatter: "dotnet format",
            linter: "roslyn-analyzers",
            codeActions: ["organize-usings", "fix-all", "convert-to-file-scoped-namespace"]
        };
    }
}
exports.LanguageServer = LanguageServer;
