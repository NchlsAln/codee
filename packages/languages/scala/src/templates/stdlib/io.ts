export function ioTemplate(): string {
  return [
    "import scala.io.Source",
    "import java.nio.file.{Files, Paths}",
    "",
    "val path = Paths.get(\"data.txt\")",
    "val text = Source.fromFile(path.toFile).getLines().mkString(\"\\n\")",
    "Files.write(path, text.getBytes(\"UTF-8\"))",
    "println(text)"
  ].join("\n");
}
