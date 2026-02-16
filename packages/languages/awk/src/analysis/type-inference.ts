export function inferAWKTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const arrayUse = line.match(/(\w+)\s*\[/);
    if (arrayUse?.[1]) {
      inferred[arrayUse[1]] = "assoc-array";
    }

    const splitCall = line.match(/split\s*\([^,]+,\s*(\w+)/);
    if (splitCall?.[1]) {
      inferred[splitCall[1]] = "array";
    }

    const stringAssign = line.match(/(\w+)\s*=\s*".*"/);
    if (stringAssign?.[1]) {
      inferred[stringAssign[1]] = "string";
      continue;
    }

    const numberAssign = line.match(/(\w+)\s*=\s*\d+(?:\.\d+)?/);
    if (numberAssign?.[1]) {
      inferred[numberAssign[1]] = "number";
      continue;
    }

    const fieldAssign = line.match(/(\w+)\s*=\s*\$\d+/);
    if (fieldAssign?.[1]) {
      inferred[fieldAssign[1]] = "string";
    }
  }

  return inferred;
}
