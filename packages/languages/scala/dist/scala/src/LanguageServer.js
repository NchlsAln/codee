"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "scala", command: "metals", args: ["-Dmetals.client=codee"], projectPath });
        this.tooling = {
            formatter: "scalafmt",
            linter: "scapegoat",
            codeActions: ["organize-imports", "fix-all", "convert-to-val"]
        };
    }
}
exports.LanguageServer = LanguageServer;
