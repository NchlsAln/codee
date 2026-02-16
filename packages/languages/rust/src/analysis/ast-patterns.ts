export const rustAstPatterns = [
  "idiom: use match for exhaustive enums",
  "idiom: use ? for error propagation",
  "idiom: prefer iterators over manual loops",
  "smell: unwrap/expect without context",
  "smell: clone in hot paths",
  "smell: blocking calls inside async contexts",
  "perf: unnecessary allocations in loops",
  "perf: collect into Vec before needed",
  "security: use of unsafe without justification",
  "security: unchecked indexing",
  "refactor: extract function from large impl blocks",
  "refactor: replace repeated match arms with helper",
  "api: exposing internal types in public interfaces",
  "async: missing .await on Future",
  "concurrency: mutex held across await"
];
