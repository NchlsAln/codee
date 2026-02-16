"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "go", command: "gopls", args: [], projectPath });
        this.tooling = {
            formatter: "gofmt",
            linter: "golangci-lint",
            codeActions: ["organize-imports", "fix-all", "extract-function"]
        };
    }
}
exports.LanguageServer = LanguageServer;
