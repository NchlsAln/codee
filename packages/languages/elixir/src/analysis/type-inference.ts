export function inferElixirTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const stringLiteral = line.match(/\b(\w+)\s*=\s*".*"/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "String";
      continue;
    }

    const intLiteral = line.match(/\b(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[1]) {
      inferred[intLiteral[1]] = "integer";
      continue;
    }

    const boolLiteral = line.match(/\b(\w+)\s*=\s*(true|false)\b/);
    if (boolLiteral?.[1]) {
      inferred[boolLiteral[1]] = "boolean";
      continue;
    }

    const listLiteral = line.match(/\b(\w+)\s*=\s*\[.*\]/);
    if (listLiteral?.[1]) {
      inferred[listLiteral[1]] = "list";
      continue;
    }

    const mapLiteral = line.match(/\b(\w+)\s*=\s*%\{.*\}/);
    if (mapLiteral?.[1]) {
      inferred[mapLiteral[1]] = "map";
    }
  }

  return inferred;
}
