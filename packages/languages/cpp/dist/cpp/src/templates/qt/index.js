"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qtTemplate = qtTemplate;
function qtTemplate() {
    return "#include <QApplication>\n\nint main(int argc, char** argv) {\n  QApplication app(argc, argv);\n  return app.exec();\n}\n";
}
