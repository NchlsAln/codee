export function jwtTemplate(): string {
  return [
    "import pdi.jwt.{JwtAlgorithm, JwtClaim, JwtSprayJson}",
    "",
    "val claim = JwtClaim(subject = Some(\"user-1\"))",
    "val token = JwtSprayJson.encode(claim, \"secret\", JwtAlgorithm.HS256)",
    "println(token)"
  ].join("\n");
}
