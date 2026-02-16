export function jwtTemplate(): string {
  return [
    "require 'jwt'",
    "payload = { sub: 123, exp: Time.now.to_i + 3600 }",
    "token = JWT.encode(payload, 'secret', 'HS256')",
    "puts token"
  ].join("\n");
}
