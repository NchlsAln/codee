export function hashingTemplate(): string {
  return [
    "import java.security.MessageDigest",
    "",
    "val md = MessageDigest.getInstance(\"SHA-256\")",
    "val bytes = md.digest(\"secret\".getBytes(\"UTF-8\"))",
    "println(bytes.map(b => f\"$b%02x\").mkString)"
  ].join("\n");
}
