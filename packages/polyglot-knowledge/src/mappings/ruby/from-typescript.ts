import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "typescript",
    to: "ruby",
    steps: ["Map Express/Fastify routes to Rails/Sinatra routing", "Translate middleware to Rack middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "typescript",
    to: "ruby",
    steps: ["Translate TypeORM/Prisma models to ActiveRecord", "Map repositories to ActiveRecord scopes"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "typescript",
    to: "ruby",
    steps: ["Translate Promises to Ruby async/futures", "Convert async/await to block-based flows"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "ruby",
    steps: ["Translate array map/filter to map/select", "Use reduce for folds"]
  },
  {
    conceptId: "paradigms.closures",
    from: "typescript",
    to: "ruby",
    steps: ["Translate callbacks to blocks", "Use procs/lambdas for closures"]
  }
];

export function typeScriptToRuby(code: string): TranslationResult {
  return translateWithEngine("typescript", "ruby", code);
}

export const typeScriptToRubyRules = rules;
