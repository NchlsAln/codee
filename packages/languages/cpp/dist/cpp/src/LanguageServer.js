"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "cpp", command: "clangd", args: [], projectPath });
        this.tooling = {
            formatter: "clang-format",
            linter: "clang-tidy",
            codeActions: ["organize-includes", "fix-all", "modernize-usage"]
        };
    }
}
exports.LanguageServer = LanguageServer;
