export function jwtTemplate(): string {
  return [
    "import jwt from 'jsonwebtoken';",
    "",
    "const token = jwt.sign({ sub: 'user-1' }, 'secret', { algorithm: 'HS256' });",
    "const claims = jwt.verify(token, 'secret');",
    "",
    "console.log(claims);"
  ].join("\n");
}
