"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "<?php",
        "use PHPUnit\\Framework\\TestCase;",
        "",
        "final class MathTest extends TestCase",
        "{",
        "  public function testAdds(): void",
        "  {",
        "    $this->assertSame(4, 2 + 2);",
        "  }",
        "}",
        ""
    ].join("\n");
}
