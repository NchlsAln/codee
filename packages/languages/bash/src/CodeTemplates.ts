import { BaseCodeTemplates } from "@codee/lang-common";
import { fileOperationsTemplate } from "./templates/file-operations/core";
import { textProcessingTemplate } from "./templates/text-processing/core";
import { systemAdminTemplate } from "./templates/system-admin/core";
import { networkingTemplate } from "./templates/networking/core";
import { automationTemplate } from "./templates/automation/core";
import { dataExtractionTemplate } from "./templates/data-extraction/core";
import { reportingTemplate } from "./templates/reporting/core";
import { securityTemplate } from "./templates/security/core";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("bash", {
      idioms: [
        "Use set -euo pipefail and trap for safety.",
        "Quote variables to avoid word splitting.",
        "Prefer builtins over external commands."
      ],
      templates: {
        "file-operations.core": fileOperationsTemplate(),
        "text-processing.core": textProcessingTemplate(),
        "system-admin.core": systemAdminTemplate(),
        "networking.core": networkingTemplate(),
        "automation.core": automationTemplate(),
        "data-extraction.core": dataExtractionTemplate(),
        "reporting.core": reportingTemplate(),
        "security.core": securityTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

