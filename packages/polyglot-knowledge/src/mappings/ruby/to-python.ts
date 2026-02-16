import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "ruby",
    to: "python",
    steps: ["Map Rails controllers to Flask/FastAPI route decorators", "Translate Sinatra routes to Flask route handlers"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "ruby",
    to: "python",
    steps: ["Translate ActiveRecord models to SQLAlchemy or Django ORM", "Map scopes to query filters"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "ruby",
    to: "python",
    steps: ["Translate Ruby async gems to asyncio", "Convert blocks to async functions where needed"]
  },
  {
    conceptId: "paradigms.functional",
    from: "ruby",
    to: "python",
    steps: ["Translate map/select/reduce to list comprehensions or map/filter", "Use functools.reduce for folds"]
  },
  {
    conceptId: "paradigms.closures",
    from: "ruby",
    to: "python",
    steps: ["Translate blocks/yield to context managers or callbacks", "Use lambda functions for inline behavior"]
  }
];

export function rubyToPython(code: string): TranslationResult {
  return translateWithEngine("ruby", "python", code);
}

export const rubyToPythonRules = rules;
