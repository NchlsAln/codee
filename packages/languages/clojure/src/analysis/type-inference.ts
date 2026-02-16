export function inferClojureTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const stringLiteral = line.match(/\(def\s+(\w+)\s+\"[^\"]*\"\)/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "string";
      continue;
    }

    const numberLiteral = line.match(/\(def\s+(\w+)\s+-?\d+(?:\.\d+)?\)/);
    if (numberLiteral?.[1]) {
      inferred[numberLiteral[1]] = "number";
      continue;
    }

    const vectorLiteral = line.match(/\(def\s+(\w+)\s+\[.*\]\)/);
    if (vectorLiteral?.[1]) {
      inferred[vectorLiteral[1]] = "vector";
      continue;
    }

    const mapLiteral = line.match(/\(def\s+(\w+)\s+\{.*\}\)/);
    if (mapLiteral?.[1]) {
      inferred[mapLiteral[1]] = "map";
      continue;
    }

    const setLiteral = line.match(/\(def\s+(\w+)\s+#\{.*\}\)/);
    if (setLiteral?.[1]) {
      inferred[setLiteral[1]] = "set";
      continue;
    }

    const fnLiteral = line.match(/\(defn\s+(\w+)\b/);
    if (fnLiteral?.[1]) {
      inferred[fnLiteral[1]] = "function";
    }
  }

  return inferred;
}
