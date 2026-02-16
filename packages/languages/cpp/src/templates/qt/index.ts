export function qtTemplate(): string {
  return "#include <QApplication>\n\nint main(int argc, char** argv) {\n  QApplication app(argc, argv);\n  return app.exec();\n}\n";
}
