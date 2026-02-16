import { ConceptDefinition } from "../../types";

export const memoryLayoutConcepts: ConceptDefinition[] = [
  {
    id: "data-structures.stack-vs-heap",
    name: "Stack vs Heap",
    category: "data-structures",
    description: "Explain allocation and ownership across stack and heap.",
    tags: ["memory", "stack", "heap"]
  },
  {
    id: "data-structures.gc",
    name: "Garbage Collection",
    category: "data-structures",
    description: "Automatic memory management via GC.",
    tags: ["memory", "gc"]
  },
  {
    id: "data-structures.ownership",
    name: "Ownership and Borrowing",
    category: "data-structures",
    description: "Borrowing rules for safe memory access.",
    tags: ["ownership", "borrowing", "rust"]
  }
];
