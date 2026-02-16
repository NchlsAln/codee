"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformAstPatterns = void 0;
exports.terraformAstPatterns = [
  { pattern: "terraform\\s*\\{", description: "Terraform block" },
  { pattern: 'provider\\s+"\\w+"', description: "Provider declaration" },
  { pattern: 'resource\\s+"\\w+"', description: "Resource definition" },
  { pattern: 'module\\s+"\\w+"', description: "Module usage" },
  { pattern: 'backend\\s+"\\w+"', description: "Backend configuration" },
  { pattern: "\\bstate\\b", description: "State reference" },
  { pattern: "\\baccess_key\\b|\\bsecret_key\\b", description: "Potential secret exposure" },
  { pattern: "version\\s*=", description: "Provider version pinning" },
];
