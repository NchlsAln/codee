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
    super("sed", {
      idioms: [
        "Use -n with explicit p for predictable output.",
        "Prefer scripts (-f) for multi-step edits.",
        "Document GNU vs BSD flags when using -i."
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
