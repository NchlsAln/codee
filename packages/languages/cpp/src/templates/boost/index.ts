export function boostTemplate(): string {
  return "#include <boost/asio.hpp>\n\nint main() {\n  boost::asio::io_context io;\n  return 0;\n}\n";
}
