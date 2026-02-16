export function propertyTemplate(): string {
  return [
    "<?php",
    "use Eris\\Generator;",
    "use Eris\\TestTrait;",
    "use PHPUnit\\Framework\\TestCase;",
    "",
    "final class ReverseTest extends TestCase",
    "{",
    "  use TestTrait;",
    "",
    "  public function testReverseTwice(): void",
    "  {",
    "    $this->forAll(Generator::string())->then(function (string $value): void {",
    "      $this->assertSame($value, strrev(strrev($value)));",
    "    });",
    "  }",
    "}",
    ""
  ].join("\n");
}
