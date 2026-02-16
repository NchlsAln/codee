export function binaryTemplate(): string {
  return "#include <cereal/archives/binary.hpp>\n#include <sstream>\n\nstruct User {\n  int id;\n  std::string email;\n  template <class Archive>\n  void serialize(Archive& ar) {\n    ar(id, email);\n  }\n};\n\nint main() {\n  std::stringstream buffer;\n  cereal::BinaryOutputArchive out(buffer);\n  out(User{1, \"ada@example.com\"});\n  return 0;\n}\n";
}
