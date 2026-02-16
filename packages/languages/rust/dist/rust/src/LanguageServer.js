"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "rust", command: "rust-analyzer", args: [], projectPath });
        this.tooling = {
            formatter: "rustfmt",
            linter: "clippy",
            codeActions: ["organize-imports", "fix-all", "add-missing-impls"]
        };
    }
}
exports.LanguageServer = LanguageServer;
