"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "import io.kotest.property.checkAll",
        "import io.kotest.core.spec.style.StringSpec",
        "",
        "class PropertyTest : StringSpec({",
        "  \"addition commutes\" {",
        "    checkAll<Int, Int> { a, b ->",
        "      assert(a + b == b + a)",
        "    }",
        "  }",
        "})"
    ].join("\n");
}
