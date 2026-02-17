export function zeroCopyParsingTemplate(): string {
  return [
    "use nom::{bytes::complete::take_while1, IResult};",
    "",
    "fn alpha(input: &str) -> IResult<&str, &str> {",
    "    take_while1(|c: char| c.is_ascii_alphabetic())(input)",
    "}",
  ].join("\n");
}
