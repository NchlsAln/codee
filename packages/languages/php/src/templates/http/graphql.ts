export function httpGraphqlTemplate(): string {
  return [
    "<?php",
    "use GraphQL\\GraphQL;",
    "use GraphQL\\Type\\Schema;",
    "",
    "$schema = new Schema([/* define types */]);",
    "$result = GraphQL::executeQuery($schema, $query);",
    "echo json_encode($result->toArray());"
  ].join("\n");
}
