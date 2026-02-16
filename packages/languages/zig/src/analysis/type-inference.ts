export function inferZigTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const typedVar = line.match(/\b(?:const|var)\s+(\w+)\s*:\s*([^=\s]+)/);
    if (typedVar?.[1] && typedVar?.[2]) {
      inferred[typedVar[1]] = typedVar[2];
      continue;
    }

    const errorUnion = line.match(/\b(?:const|var)\s+(\w+)\s*:\s*([^!\s]+)!([^=\s]+)/);
    if (errorUnion?.[1] && errorUnion?.[2] && errorUnion?.[3]) {
      inferred[errorUnion[1]] = `${errorUnion[2]}!${errorUnion[3]}`;
      continue;
    }

    const optionalType = line.match(/\b(?:const|var)\s+(\w+)\s*:\s*\?([^=\s]+)/);
    if (optionalType?.[1] && optionalType?.[2]) {
      inferred[optionalType[1]] = `?${optionalType[2]}`;
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

    const arrayLiteral = line.match(/\b(?:const|var)\s+(\w+)\s*=\s*\[_\]/);
    if (arrayLiteral?.[1]) {
      inferred[arrayLiteral[1]] = "array";
      continue;
    }

    const sliceLiteral = line.match(/\b(?:const|var)\s+(\w+)\s*=\s*\[\]\s*const\s+u8/);
    if (sliceLiteral?.[1]) {
      inferred[sliceLiteral[1]] = "[]const u8";
      continue;
    }

    if (line.includes("comptime")) {
      inferred["comptime"] = "true";
    }
    if (line.includes("!")) {
      inferred["error-union"] = "true";
    }
    if (line.includes("?")) {
      inferred["optional-types"] = "true";
    }
  }

  return inferred;
}
