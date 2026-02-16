export function inferSASTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const lengthChar = line.match(/\bLENGTH\s+(\w+)\s+\$\s*(\d+)/i);
    if (lengthChar?.[1]) {
      inferred[lengthChar[1]] = "char";
      continue;
    }

    const lengthNum = line.match(/\bLENGTH\s+(\w+)\s+(\d+)/i);
    if (lengthNum?.[1]) {
      inferred[lengthNum[1]] = "numeric";
      continue;
    }

    const formatStmt = line.match(/\bFORMAT\s+(\w+)\s+([\w\.]+)/i);
    if (formatStmt?.[1] && formatStmt?.[2]) {
      inferred[formatStmt[1]] = `format:${formatStmt[2].toLowerCase()}`;
      continue;
    }

    const inputStmt = line.match(/\bINPUT\s+(\w+)\s+([\w\.]+)/i);
    if (inputStmt?.[1] && inputStmt?.[2]) {
      inferred[inputStmt[1]] = `informat:${inputStmt[2].toLowerCase()}`;
    }
  }

  return inferred;
}
