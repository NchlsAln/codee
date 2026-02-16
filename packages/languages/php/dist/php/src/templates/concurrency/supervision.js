"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supervisionTemplate = supervisionTemplate;
function supervisionTemplate() {
    return [
        "<?php",
        "final class Supervisor",
        "{",
        "  public function run(callable $worker): void",
        "  {",
        "    while (true) {",
        "      try {",
        "        $worker();",
        "        break;",
        "      } catch (Throwable $e) {",
        "        error_log('worker crashed, restarting');",
        "      }",
        "    }",
        "  }",
        "}",
        "",
        "(new Supervisor())->run(fn() => print('ok'));"
    ].join("\n");
}
