"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiContractsTemplate = apiContractsTemplate;
function apiContractsTemplate() {
  return [
    "import { z } from 'zod';",
    "",
    "const User = z.object({ id: z.string(), email: z.string().email() });",
    "type User = z.infer<typeof User>;",
    "",
    "export async function fetchUser(): Promise<User> {",
    "  const res = await fetch('/api/user');",
    "  const json = await res.json();",
    "  return User.parse(json);",
    "}",
  ].join("\n");
}
