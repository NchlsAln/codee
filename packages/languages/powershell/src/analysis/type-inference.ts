export function inferPowershellTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const typedVar = line.match(/\[(\w+)\]\s*\$(\w+)/);
    if (typedVar?.[1] && typedVar?.[2]) {
      inferred[typedVar[2]] = typedVar[1].toLowerCase();
      continue;
    }

    const arrayAssign = line.match(/^\s*\$(\w+)\s*=\s*@\(/);
    if (arrayAssign?.[1]) {
      inferred[arrayAssign[1]] = "array";
      continue;
    }

    const hashAssign = line.match(/^\s*\$(\w+)\s*=\s*@\{/);
    if (hashAssign?.[1]) {
      inferred[hashAssign[1]] = "hashtable";
      continue;
    }

    const assignment = line.match(/^\s*\$(\w+)\s*=\s*(.+)$/);
    if (assignment?.[1] && assignment?.[2]) {
      const name = assignment[1];
      const value = assignment[2].trim();
      if (/^".*"$/.test(value) || /^'.*'$/.test(value)) {
        inferred[name] = "string";
      } else if (/^\d+$/.test(value)) {
        inferred[name] = "int";
      } else if (/^\d+\.\d+$/.test(value)) {
        inferred[name] = "float";
      } else if (/^\$true$|^\$false$/i.test(value)) {
        inferred[name] = "bool";
      } else if (/^\[datetime\]/i.test(value)) {
        inferred[name] = "datetime";
      }
    }
  }

  return inferred;
}
