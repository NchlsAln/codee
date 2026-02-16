export function inferRubyTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const sorbetSig = line.match(/sig\s*\{\s*params\(([^)]*)\)/);
    if (sorbetSig?.[1]) {
      inferred["sorbet-sig"] = sorbetSig[1].replace(/\s+/g, " ");
    }

    const rbsType = line.match(/\bclass\s+\w+\s*\[.*\]/);
    if (rbsType) {
      inferred["rbs-generic"] = "true";
    }

    const stringLiteral = line.match(/\b(\w+)\s*=\s*".*"/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "String";
      continue;
    }

    const intLiteral = line.match(/\b(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[1]) {
      inferred[intLiteral[1]] = "Integer";
      continue;
    }

    const boolLiteral = line.match(/\b(\w+)\s*=\s*(true|false)\b/);
    if (boolLiteral?.[1]) {
      inferred[boolLiteral[1]] = "Boolean";
      continue;
    }

    const arrayLiteral = line.match(/\b(\w+)\s*=\s*\[.*\]/);
    if (arrayLiteral?.[1]) {
      inferred[arrayLiteral[1]] = "Array";
      continue;
    }

    const hashLiteral = line.match(/\b(\w+)\s*=\s*\{.*\}/);
    if (hashLiteral?.[1]) {
      inferred[hashLiteral[1]] = "Hash";
    }
  }

  return inferred;
}
