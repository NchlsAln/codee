export function jwtTemplate(): string {
  return [
    "{:ok, token, _claims} = Joken.encode_and_sign(%{sub: 123}, \"secret\")",
    "IO.puts(token)"
  ].join("\n");
}
