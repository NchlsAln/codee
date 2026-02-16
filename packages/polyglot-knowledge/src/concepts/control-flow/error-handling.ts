import { ConceptDefinition } from "../../types";

export const errorHandlingConcepts: ConceptDefinition[] = [
  {
    id: "control-flow.exceptions",
    name: "Exceptions",
    category: "control-flow",
    description: "Throw and catch runtime exceptions.",
    tags: ["exceptions", "try-catch"]
  },
  {
    id: "control-flow.result",
    name: "Result Types",
    category: "control-flow",
    description: "Return Result/Option types to encode errors.",
    tags: ["result", "option", "monad"]
  },
  {
    id: "control-flow.error-returns",
    name: "Error Returns",
    category: "control-flow",
    description: "Return explicit error values alongside results.",
    tags: ["error", "return", "go"]
  },
  {
    id: "control-flow.panic-recover",
    name: "Panic / Recover",
    category: "control-flow",
    description: "Use panic and recover sparingly for exceptional failures.",
    tags: ["panic", "recover", "go"]
  }
];
