export function jwtTemplate(): string {
  return [
    "(require '[buddy.sign.jwt :as jwt])",
    "(def token (jwt/sign {:sub 123} \"secret\"))",
    "(println token)"
  ].join("\n");
}
