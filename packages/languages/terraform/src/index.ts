import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { terraformRuntime } from "./implementation/runtime";
import { terraformEcosystem } from "./implementation/ecosystem";
import { terraformIdioms } from "./implementation/idioms";
import { terraformAstPatterns } from "./analysis/ast-patterns";
import { inferTerraformTypes } from "./analysis/type-inference";

export const terraformDefinition: LanguageDefinition = {
  id: "terraform",
  name: "Terraform",
  extensions: [".tf", ".tfvars", ".hcl"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering(),
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export {
  terraformRuntime,
  terraformEcosystem,
  terraformIdioms,
  terraformAstPatterns,
  inferTerraformTypes,
};
