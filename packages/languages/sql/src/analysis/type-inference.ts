export function inferSqlTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const createTable = line.match(/CREATE\s+TABLE\s+(\w+)\s*\(/i);
    if (createTable?.[1]) {
      inferred[createTable[1]] = "table";
    }
  }

  return inferred;
}
