"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroCopyParsingTemplate = zeroCopyParsingTemplate;
function zeroCopyParsingTemplate() {
  return [
    "use nom::{bytes::complete::take_while1, IResult};",
    "",
    "fn alpha(input: &str) -> IResult<&str, &str> {",
    "    take_while1(|c: char| c.is_ascii_alphabetic())(input)",
    "}",
  ].join("\n");
}
