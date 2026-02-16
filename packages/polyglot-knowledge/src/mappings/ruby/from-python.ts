import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "python",
    to: "ruby",
    steps: ["Map Flask/FastAPI decorators to Rails routes/controllers", "Translate FastAPI routers to Sinatra-style routes"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "python",
    to: "ruby",
    steps: ["Translate SQLAlchemy/Django models to ActiveRecord", "Map query filters to scopes"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "python",
    to: "ruby",
    steps: ["Translate asyncio to Ruby async libraries", "Convert async functions to blocks or futures"]
  },
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "ruby",
    steps: ["Translate list comprehensions to map/select", "Use reduce for folds"]
  },
  {
    conceptId: "paradigms.closures",
    from: "python",
    to: "ruby",
    steps: ["Translate context managers to blocks/yield", "Use procs/lambdas for callbacks"]
  }
];

export function pythonToRuby(code: string): TranslationResult {
  return translateWithEngine("python", "ruby", code);
}

export const pythonToRubyRules = rules;
