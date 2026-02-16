export function binaryTemplate(): string {
  return [
    "import java.io.ByteArrayOutputStream",
    "import java.io.ObjectOutputStream",
    "",
    "val out = ByteArrayOutputStream()",
    "ObjectOutputStream(out).use { it.writeObject(\"payload\") }",
    "println(out.toByteArray().size)"
  ].join("\n");
}
