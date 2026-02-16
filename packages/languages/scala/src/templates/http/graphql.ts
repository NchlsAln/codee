export function httpGraphqlTemplate(): string {
  return [
    "import sangria.schema._",
    "",
    "val QueryType = ObjectType(\"Query\", fields[Unit, Unit](`Field`(\"ping\", StringType, resolve = _ => \"pong\")))",
    "val schema = Schema(QueryType)",
    "println(schema.query.name)"
  ].join("\n");
}
