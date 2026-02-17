export function brandTypesTemplate(): string {
  return [
    "type Brand<T, B> = T & { __brand: B };",
    "type UserId = Brand<string, 'UserId'>;",
    "",
    "function makeUserId(value: string): UserId {",
    "  return value as UserId;",
    "}",
    "",
    "const id = makeUserId('u_123');",
  ].join("\n");
}
