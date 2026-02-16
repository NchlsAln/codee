"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const core_1 = require("./templates/cloud-providers/core");
const core_2 = require("./templates/containers/core");
const core_3 = require("./templates/networking/core");
const core_4 = require("./templates/security/core");
const core_5 = require("./templates/databases/core");
const core_6 = require("./templates/monitoring/core");
const core_7 = require("./templates/ci-cd/core");
const core_8 = require("./templates/serverless/core");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
  constructor() {
    super("ansible", {
      idioms: ["Prefer idempotent tasks."],
      templates: {
        "cloud-providers.core": (0, core_1.cloudProvidersTemplate)(),
        "containers.core": (0, core_2.containersTemplate)(),
        "networking.core": (0, core_3.networkingTemplate)(),
        "security.core": (0, core_4.securityTemplate)(),
        "databases.core": (0, core_5.databasesTemplate)(),
        "monitoring.core": (0, core_6.monitoringTemplate)(),
        "ci-cd.core": (0, core_7.cicdTemplate)(),
        "serverless.core": (0, core_8.serverlessTemplate)(),
      },
      frameworkTemplates: {},
      testTemplates: {},
    });
  }
}
exports.CodeTemplates = CodeTemplates;
