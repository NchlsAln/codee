export function inferZigTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const typedVar = line.match(/\b(?:const|var)\s+(\w+)\s*:\s*([^=\s]+)/);
    if (typedVar?.[1] && typedVar?.[2]) {
      inferred[typedVar[1]] = typedVar[2];
      continue;
    }

    const stringLiteral = line.match(/\b(?:const|var)\s+(\w+)\s*=\s*\".*\"/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "[]const u8";
      continue;
    }

    const intLiteral = line.match(/\b(?:const|var)\s+(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[1]) {
      inferred[intLiteral[1]] = "int";
    }
  }

  return inferred;
}
