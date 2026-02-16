export function inferAnsibleTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const match = line.match(/^\s*([\w-]+)\s*:\s*(.+)?$/);
    if (match?.[1] && match?.[2]) {
      const key = match[1];
      const value = match[2].trim();
      if (/^(true|false)$/i.test(value)) {
        inferred[key] = "bool";
      } else if (/^\d+$/.test(value)) {
        inferred[key] = "int";
      } else if (/^\d+\.\d+$/.test(value)) {
        inferred[key] = "float";
      } else if (/^\[.*\]$/.test(value)) {
        inferred[key] = "array";
      } else {
        inferred[key] = "string";
      }
    }
  }

  return inferred;
}
