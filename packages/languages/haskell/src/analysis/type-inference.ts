export function inferHaskellTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const signature = line.match(/^\s*(\w+)\s*::\s*(.+)$/);
    if (signature?.[1] && signature?.[2]) {
      inferred[signature[1]] = signature[2].trim();
      continue;
    }

    const intLiteral = line.match(/^\s*(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[1]) {
      inferred[intLiteral[1]] = "Int";
      continue;
    }

    const stringLiteral = line.match(/^\s*(\w+)\s*=\s*\".*\"/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "String";
    }
  }

  return inferred;
}
