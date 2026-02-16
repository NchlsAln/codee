export function inferDartTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const explicit = line.match(/\b(final|var)\s+(\w+)\s*:\s*([\w<>,?\s.]+)\s*(=|$)/);
    if (explicit?.[2] && explicit?.[3]) {
      inferred[explicit[2]] = explicit[3].trim();
      continue;
    }

    const stringLiteral = line.match(/\b(final|var)\s+(\w+)\s*=\s*".*"/);
    if (stringLiteral?.[2]) {
      inferred[stringLiteral[2]] = "String";
      continue;
    }

    const intLiteral = line.match(/\b(final|var)\s+(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[2]) {
      inferred[intLiteral[2]] = "int";
      continue;
    }

    const boolLiteral = line.match(/\b(final|var)\s+(\w+)\s*=\s*(true|false)\b/);
    if (boolLiteral?.[2]) {
      inferred[boolLiteral[2]] = "bool";
      continue;
    }

    const listLiteral = line.match(/\b(final|var)\s+(\w+)\s*=\s*\[/);
    if (listLiteral?.[2] && !line.includes(":")) {
      inferred[listLiteral[2]] = "List<dynamic>";
      continue;
    }

    const mapLiteral = line.match(/\b(final|var)\s+(\w+)\s*=\s*\{/);
    if (mapLiteral?.[2]) {
      inferred[mapLiteral[2]] = "Map<dynamic, dynamic>";
      continue;
    }

    const futureLiteral = line.match(/\b(final|var)\s+(\w+)\s*=\s*Future\./);
    if (futureLiteral?.[2]) {
      inferred[futureLiteral[2]] = "Future<dynamic>";
    }
  }

  return inferred;
}
