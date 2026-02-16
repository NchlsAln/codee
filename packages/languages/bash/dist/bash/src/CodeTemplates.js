"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const core_1 = require("./templates/file-operations/core");
const core_2 = require("./templates/text-processing/core");
const core_3 = require("./templates/system-admin/core");
const core_4 = require("./templates/networking/core");
const core_5 = require("./templates/automation/core");
const core_6 = require("./templates/data-extraction/core");
const core_7 = require("./templates/reporting/core");
const core_8 = require("./templates/security/core");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("bash", {
            idioms: [
                "Use set -euo pipefail and trap for safety.",
                "Quote variables to avoid word splitting.",
                "Prefer builtins over external commands."
            ],
            templates: {
                "file-operations.core": (0, core_1.fileOperationsTemplate)(),
                "text-processing.core": (0, core_2.textProcessingTemplate)(),
                "system-admin.core": (0, core_3.systemAdminTemplate)(),
                "networking.core": (0, core_4.networkingTemplate)(),
                "automation.core": (0, core_5.automationTemplate)(),
                "data-extraction.core": (0, core_6.dataExtractionTemplate)(),
                "reporting.core": (0, core_7.reportingTemplate)(),
                "security.core": (0, core_8.securityTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
