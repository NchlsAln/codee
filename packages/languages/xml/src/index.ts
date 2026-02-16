import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { xmlRuntime } from "./implementation/runtime";
import { xmlEcosystem } from "./implementation/ecosystem";
import { xmlIdioms } from "./implementation/idioms";
import { xmlAstPatterns } from "./analysis/ast-patterns";
import { inferXmlTypes } from "./analysis/type-inference";

export const xmlDefinition: LanguageDefinition = {
  id: "xml",
  name: "XML",
  extensions: [".xml", ".xsd", ".xsl", ".xslt"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { xmlRuntime, xmlEcosystem, xmlIdioms, xmlAstPatterns, inferXmlTypes };
