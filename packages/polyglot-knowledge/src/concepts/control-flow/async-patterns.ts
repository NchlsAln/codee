import { ConceptDefinition } from "../../types";

export const asyncPatterns: ConceptDefinition[] = [
  {
    id: "control-flow.async-await",
    name: "Async/Await",
    category: "control-flow",
    description: "Structured asynchronous flow using async/await.",
    tags: ["async", "await", "future"]
  },
  {
    id: "control-flow.coroutines",
    name: "Coroutines",
    category: "control-flow",
    description: "Suspending functions and cooperative scheduling.",
    tags: ["coroutines", "yield"]
  }
];
