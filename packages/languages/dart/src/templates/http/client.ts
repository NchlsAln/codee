export function httpClientTemplate(): string {
  return [
    "import 'package:http/http.dart' as http;",
    "",
    "final response = await http.get(Uri.parse('https://example.com/health'));",
    "print(response.statusCode);"
  ].join("\n");
}
