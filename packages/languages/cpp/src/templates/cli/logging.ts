export function cliLoggingTemplate(): string {
  return "#include <spdlog/spdlog.h>\n\nint main() {\n  spdlog::info(\"service started\");\n  return 0;\n}\n";
}
