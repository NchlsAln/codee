"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestjsArchitectureTemplate = nestjsArchitectureTemplate;
function nestjsArchitectureTemplate() {
  return [
    "import { Module, Controller, Get, Injectable } from '@nestjs/common';",
    "",
    "@Injectable()",
    "class AppService {",
    "  getHealth() { return { ok: true }; }",
    "}",
    "",
    "@Controller()",
    "class AppController {",
    "  constructor(private readonly service: AppService) {}",
    "  @Get('/health')",
    "  getHealth() { return this.service.getHealth(); }",
    "}",
    "",
    "@Module({ controllers: [AppController], providers: [AppService] })",
    "export class AppModule {}",
  ].join("\n");
}
