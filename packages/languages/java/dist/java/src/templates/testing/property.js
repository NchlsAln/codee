"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return "import net.jqwik.api.ForAll;\nimport net.jqwik.api.Property;\n\nclass PropertiesTest {\n  @Property\n  boolean additionCommutative(@ForAll int a, @ForAll int b) {\n    return a + b == b + a;\n  }\n}\n";
}
