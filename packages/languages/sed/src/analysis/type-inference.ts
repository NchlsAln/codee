export function inferSedTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  if (/s\/[^/]+\/[^/]+\//.test(source)) {
    inferred.patternSpace = "string";
  }
  return inferred;
}
