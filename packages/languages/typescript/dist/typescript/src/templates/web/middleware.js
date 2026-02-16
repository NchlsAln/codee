"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return [
        "import { randomUUID } from 'node:crypto';",
        "import type { NextFunction, Request, Response } from 'express';",
        "",
        "export function requestId(req: Request, res: Response, next: NextFunction): void {",
        "  const id = req.header('x-request-id') ?? randomUUID();",
        "  res.setHeader('x-request-id', id);",
        "  next();",
        "}"
    ].join("\n");
}
