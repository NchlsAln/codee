"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const core_1 = require("./templates/stdlib/core");
const core_2 = require("./templates/systems/core");
const core_3 = require("./templates/web/core");
const core_4 = require("./templates/database/core");
const core_5 = require("./templates/concurrency/core");
const core_6 = require("./templates/testing/core");
const core_7 = require("./templates/cli/core");
const core_8 = require("./templates/http/core");
const core_9 = require("./templates/serialization/core");
const core_10 = require("./templates/ffi/core");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("ocaml", {
            idioms: ["Prefer pure functions where possible.", "Use pattern matching.", "Structure code with modules."],
            templates: {
                "stdlib.core": (0, core_1.stdlibTemplate)(),
                "systems.core": (0, core_2.systemsTemplate)(),
                "web.core": (0, core_3.webTemplate)(),
                "database.core": (0, core_4.databaseTemplate)(),
                "concurrency.core": (0, core_5.concurrencyTemplate)(),
                "testing.core": (0, core_6.testingTemplate)(),
                "cli.core": (0, core_7.cliTemplate)(),
                "http.core": (0, core_8.httpTemplate)(),
                "serialization.core": (0, core_9.serializationTemplate)(),
                "ffi.core": (0, core_10.ffiTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
