"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformEcosystem = void 0;
exports.terraformEcosystem = {
  fileExtensions: [".tf", ".tfvars", ".hcl"],
  paradigms: ["declarative", "immutable-infra"],
  registry: ["Terraform Registry"],
  providers: ["AWS", "Azure", "GCP", "Kubernetes"],
  modules: ["Public and private modules"],
  backends: ["S3", "GCS", "AzureRM", "Terraform Cloud"],
  tooling: ["tflint", "tfsec", "checkov"],
  testing: ["terraform validate", "terratest"],
  ciCd: ["GitHub Actions", "Terraform Cloud"],
  deploymentTargets: ["cloud", "kubernetes", "networking"],
};
