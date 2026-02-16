export function ormTemplate(): string {
  return [
    "import 'package:drift/drift.dart';",
    "",
    "class Users extends Table {",
    "  IntColumn get id => integer()();",
    "  TextColumn get name => text()();",
    "  @override Set<Column> get primaryKey => {id};",
    "}",
    "",
    "final rows = await db.select(db.users).get();",
    "print(rows.length);"
  ].join("\n");
}
