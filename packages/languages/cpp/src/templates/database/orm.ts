export function ormTemplate(): string {
  return "#include <odb/database.hxx>\n\n#pragma db object\nstruct User {\n  #pragma db id auto\n  unsigned long id;\n  std::string email;\n};\n";
}
