"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "dart", command: "dart", args: ["language-server", "--protocol=lsp"], projectPath });
        this.tooling = {
            formatter: "dart format",
            linter: "dart analyze",
            codeActions: ["organize-imports", "fix-all", "add-lints"]
        };
    }
}
exports.LanguageServer = LanguageServer;
