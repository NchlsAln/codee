export function hashingTemplate(): string {
  return [
    "using System.Security.Cryptography;",
    "using System.Text;",
    "",
    "var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(\"secret\"));",
    "Console.WriteLine(Convert.ToHexString(bytes));"
  ].join("\n");
}
