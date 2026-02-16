import { BaseCodeTemplates } from "@codee/lang-common";
import { cloudProvidersTemplate } from "./templates/cloud-providers/core";
import { containersTemplate } from "./templates/containers/core";
import { networkingTemplate } from "./templates/networking/core";
import { securityTemplate } from "./templates/security/core";
import { databasesTemplate } from "./templates/databases/core";
import { monitoringTemplate } from "./templates/monitoring/core";
import { cicdTemplate } from "./templates/ci-cd/core";
import { serverlessTemplate } from "./templates/serverless/core";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("dockerfile", {
      idioms: ["Use multi-stage builds for smaller images."],
      templates: {
        "cloud-providers.core": cloudProvidersTemplate(),
        "containers.core": containersTemplate(),
        "networking.core": networkingTemplate(),
        "security.core": securityTemplate(),
        "databases.core": databasesTemplate(),
        "monitoring.core": monitoringTemplate(),
        "ci-cd.core": cicdTemplate(),
        "serverless.core": serverlessTemplate(),
      },
      frameworkTemplates: {},
      testTemplates: {},
    });
  }
}
