export function httpGraphqlTemplate(): string {
  return "#include <cpr/cpr.h>\n\nint main() {\n  auto response = cpr::Post(cpr::Url{\"https://example.com/graphql\"}, cpr::Body{\"{\\\"query\\\":\\\"query { health { ok } }\\\"}\"}, cpr::Header{{\"content-type\", \"application/json\"}});\n  (void)response;\n  return 0;\n}\n";
}
