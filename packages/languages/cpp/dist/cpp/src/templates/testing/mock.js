"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
    return "#include <gmock/gmock.h>\n\nstruct Api {\n  virtual ~Api() = default;\n  virtual int fetch() = 0;\n};\n\nstruct MockApi : Api {\n  MOCK_METHOD(int, fetch, (), (override));\n};\n";
}
