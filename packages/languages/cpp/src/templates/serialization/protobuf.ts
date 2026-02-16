export function protobufTemplate(): string {
  return "#include <google/protobuf/util/json_util.h>\n\nint main() {\n  User user;\n  user.set_id(1);\n  user.set_email(\"ada@example.com\");\n  std::string json;\n  google::protobuf::util::MessageToJsonString(user, &json);\n  return 0;\n}\n";
}
