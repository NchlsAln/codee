export const sasEcosystem = {
  fileExtensions: [".sas", ".sas7bdat", ".sas7bcat"],
  paradigms: ["procedural", "data-step", "macro"],
  packageManagers: ["SAS libraries", "macro catalogs"],
  buildTools: ["SAS Studio", "Enterprise Guide"],
  testing: ["PROC COMPARE", "PROC REPORT"],
  integrationTesting: ["SAS/CONNECT", "Viya pipelines"],
  linting: ["SAS Studio code analyzer"],
  formatting: ["SAS Studio formatter"],
  typeChecking: ["DATA step compiler"],
  docs: ["ODS", "PROC DOCUMENT"],
  ciCd: ["Jenkins", "GitHub Actions"],
  deploymentTargets: ["SAS 9", "SAS Viya"],
  runtimes: ["SAS", "CAS"],
  frameworks: ["Enterprise Guide", "Viya", "SAS/STAT", "SAS/ETL"],
  packageIndex: "sas",
  observability: ["SAS logs", "PROC PRINTTO"]
};
