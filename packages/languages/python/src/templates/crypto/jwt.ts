export function jwtTemplate(): string {
  return [
    "import jwt",
    "",
    "token = jwt.encode({\"sub\": \"user-1\"}, 'secret', algorithm='HS256')",
    "claims = jwt.decode(token, 'secret', algorithms=['HS256'])",
    "print(claims)"
  ].join("\n");
}
