export function inferCsharpTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const explicit = line.match(/\b([A-Z][\w<>,?\s.]+)\s+(\w+)\s*(=|;)/);
    if (explicit?.[2] && explicit?.[1]) {
      inferred[explicit[2]] = explicit[1].trim();
      continue;
    }

    const varString = line.match(/\bvar\s+(\w+)\s*=\s*".*"/);
    if (varString?.[1]) {
      inferred[varString[1]] = "string";
      continue;
    }

    const varInt = line.match(/\bvar\s+(\w+)\s*=\s*\d+\b/);
    if (varInt?.[1]) {
      inferred[varInt[1]] = "int";
      continue;
    }

    const varBool = line.match(/\bvar\s+(\w+)\s*=\s*(true|false)\b/);
    if (varBool?.[1]) {
      inferred[varBool[1]] = "bool";
      continue;
    }

    const listInit = line.match(/\bvar\s+(\w+)\s*=\s*new\s+List<([^>]+)>/);
    if (listInit?.[1] && listInit?.[2]) {
      inferred[listInit[1]] = `List<${listInit[2].trim()}>`;
      continue;
    }

    const dictInit = line.match(/\bvar\s+(\w+)\s*=\s*new\s+Dictionary<([^>]+)>/);
    if (dictInit?.[1] && dictInit?.[2]) {
      inferred[dictInit[1]] = `Dictionary<${dictInit[2].trim()}>`;
      continue;
    }

    const newObj = line.match(/\bvar\s+(\w+)\s*=\s*new\s+([A-Z][\w<>.]+)\s*\(/);
    if (newObj?.[1] && newObj?.[2]) {
      inferred[newObj[1]] = newObj[2];
    }
  }

  return inferred;
}
