"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandTypesTemplate = brandTypesTemplate;
function brandTypesTemplate() {
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
