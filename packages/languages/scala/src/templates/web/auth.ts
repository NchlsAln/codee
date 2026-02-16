export function authTemplate(): string {
  return [
    "import akka.http.scaladsl.server.Directives._",
    "import akka.http.scaladsl.server.directives.Credentials",
    "",
    "def authUser(creds: Credentials): Option[String] = creds match {",
    "  case p @ Credentials.Provided(id) if p.verify(\"secret\") => Some(id)",
    "  case _ => None",
    "}",
    "",
    "val route = authenticateBasic(realm = \"secure\", authUser) { user =>",
    "  complete(s\"hello $user\")",
    "}"
  ].join("\n");
}
