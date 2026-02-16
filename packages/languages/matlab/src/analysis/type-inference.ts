export function inferMatlabTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const numericLiteral = line.match(/(\w+)\s*=\s*\d+(?:\.\d+)?/);
    if (numericLiteral?.[1]) {
      inferred[numericLiteral[1]] = "double";
      continue;
    }

    const stringLiteral = line.match(/(\w+)\s*=\s*'[^']*'/);
    if (stringLiteral?.[1]) {
      inferred[stringLiteral[1]] = "char";
      continue;
    }

    const matrixLiteral = line.match(/(\w+)\s*=\s*\[.*\]/);
    if (matrixLiteral?.[1]) {
      inferred[matrixLiteral[1]] = "matrix";
    }
  }

  return inferred;
}
