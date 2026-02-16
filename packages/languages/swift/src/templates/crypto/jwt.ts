export function jwtTemplate(): string {
  return [
    "import JWTKit",
    "",
    "struct Payload: JWTPayload {",
    "  var sub: SubjectClaim",
    "  func verify(using signer: JWTSigner) throws {}",
    "}",
    "",
    "let signer = JWTSigner.hs256(key: \"secret\")",
    "let token = try signer.sign(Payload(sub: .init(value: \"user-1\")))",
    "print(token)"
  ].join("\n");
}
