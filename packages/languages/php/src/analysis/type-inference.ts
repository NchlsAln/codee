export function inferPhpTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const phpdocVar = line.match(/@var\s+([\w\\|?<>]+)\s+\$(\w+)/);
    if (phpdocVar?.[1] && phpdocVar?.[2]) {
      inferred[phpdocVar[2]] = phpdocVar[1];
      continue;
    }

    const typedProperty = line.match(/\b(public|protected|private)\s+([\w\\|?<>]+)\s+\$(\w+)/);
    if (typedProperty?.[2] && typedProperty?.[3]) {
      inferred[typedProperty[3]] = typedProperty[2].trim();
      continue;
    }

    const typedParam = line.match(/function\s+\w+\s*\(([^)]*)\)/);
    if (typedParam?.[1] && typedParam[1].includes("$")) {
      typedParam[1].split(",").forEach((param) => {
        const match = param.trim().match(/([\w\\|?<>]+)\s+\$(\w+)/);
        if (match?.[1] && match?.[2]) {
          inferred[match[2]] = match[1];
        }
      });
    }

    const stringLiteral = line.match(/\$(\w+)\s*=\s*".*"/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "string";
      continue;
    }

    const intLiteral = line.match(/\$(\w+)\s*=\s*\d+\b/);
    if (intLiteral?.[1]) {
      inferred[intLiteral[1]] = "int";
      continue;
    }

    const floatLiteral = line.match(/\$(\w+)\s*=\s*\d+\.\d+/);
    if (floatLiteral?.[1]) {
      inferred[floatLiteral[1]] = "float";
      continue;
    }

    const boolLiteral = line.match(/\$(\w+)\s*=\s*(true|false)\b/);
    if (boolLiteral?.[1]) {
      inferred[boolLiteral[1]] = "bool";
      continue;
    }

    const arrayLiteral = line.match(/\$(\w+)\s*=\s*(\[.*\]|array\()/);
    if (arrayLiteral?.[1]) {
      inferred[arrayLiteral[1]] = "array";
      continue;
    }

    const newInstance = line.match(/\$(\w+)\s*=\s*new\s+([A-Z][A-Za-z0-9_]*)/);
    if (newInstance?.[1] && newInstance?.[2]) {
      inferred[newInstance[1]] = newInstance[2];
    }

    if (line.includes("?->")) {
      inferred["nullable-access"] = "true";
    }
    if (line.includes("|")) {
      inferred["union-types"] = "true";
    }
  }

  return inferred;
}
