export function inferKotlinTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const explicit = line.match(/\b(val|var)\s+(\w+)\s*:\s*([\w<>,?\s.]+)\s*(=|$)/);
    if (explicit?.[2] && explicit?.[3]) {
      inferred[explicit[2]] = explicit[3].trim();
      continue;
    }

    const stringLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*".*"/);
    if (stringLiteral?.[2]) {
      inferred[stringLiteral[2]] = "String";
      continue;
    }

    const intLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[2]) {
      inferred[intLiteral[2]] = "Int";
      continue;
    }

    const booleanLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*(true|false)\b/);
    if (booleanLiteral?.[2]) {
      inferred[booleanLiteral[2]] = "Boolean";
    }

    const listLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*listOf\(/);
    if (listLiteral?.[2]) {
      inferred[listLiteral[2]] = "List<Any>";
    }

    const mapLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*mapOf\(/);
    if (mapLiteral?.[2]) {
      inferred[mapLiteral[2]] = "Map<Any, Any>";
    }

    const flowLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*flow\s*\{/);
    if (flowLiteral?.[2]) {
      inferred[flowLiteral[2]] = "Flow<Any>";
    }

    const nullable = line.match(/\b(val|var)\s+(\w+)\s*:\s*\w+\?/);
    if (nullable?.[2]) {
      inferred[nullable[2]] = "Nullable";
    }
  }

  return inferred;
}
