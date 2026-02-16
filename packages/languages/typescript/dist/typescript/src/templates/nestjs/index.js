"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestjsTemplate = nestjsTemplate;
function nestjsTemplate() {
    return [
        "import { Controller, Get } from '@nestjs/common';",
        "",
        "@Controller('health')",
        "export class HealthController {",
        "  @Get()",
        "  getHealth(): { ok: boolean } {",
        "    return { ok: true };",
        "  }",
        "}"
    ].join("\n");
}
