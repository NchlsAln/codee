function inferValueType(value: unknown): string {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    const types = Array.from(new Set(value.map(inferValueType)));
    return types.length ? `array<${types.join("|")}>` : "array<unknown>";
  }
  switch (typeof value) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return "object";
    default:
      return "unknown";
  }
}

export function inferJsonTypes(source: string): Record<string, string> {
  const inferred: Record<string, string> = {};
  try {
    const parsed = JSON.parse(source) as unknown;
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
        inferred[key] = inferValueType(value);
      }
    } else {
      inferred.root = inferValueType(parsed);
    }
  } catch {
    return {};
  }

  return inferred;
}
