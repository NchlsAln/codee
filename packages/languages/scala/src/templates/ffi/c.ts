export function ffiCTemplate(): string {
  return [
    "import scala.scalanative.unsafe._",
    "import scala.scalanative.unsigned._",
    "",
    "@extern",
    "object CLib {",
    "  def strlen(str: CString): CSize = extern",
    "}",
    "",
    "Zone { implicit z =>",
    "  val len = CLib.strlen(c\"hello\")",
    "  println(len)",
    "}"
  ].join("\n");
}
