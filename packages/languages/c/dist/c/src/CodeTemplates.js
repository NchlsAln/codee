"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("c", {
            idioms: ["Prefer clear and portable C."],
            templates: {},
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
