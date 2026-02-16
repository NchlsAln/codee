"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
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
exports.LanguageServer = LanguageServer;
