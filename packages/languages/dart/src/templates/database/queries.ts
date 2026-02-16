export function queriesTemplate(): string {
  return [
    "import 'package:postgres/postgres.dart';",
    "",
    "final conn = await Connection.open(",
    "  Endpoint(host: 'localhost', database: 'app', username: 'user', password: 'pass'),",
    ");",
    "final result = await conn.execute(Sql.named('select id, name from users where id = @id'), parameters: {'id': 1});",
    "print(result.first);",
    "await conn.close();"
  ].join("\n");
}
