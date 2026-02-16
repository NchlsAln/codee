export function authTemplate(): string {
  return [
    "import type { NextFunction, Request, Response } from 'express';",
    "",
    "export function requireToken(req: Request, res: Response, next: NextFunction): void {",
    "  const token = req.header('authorization');",
    "  if (token !== 'Bearer secret') {",
    "    res.status(403).json({ error: 'forbidden' });",
    "    return;",
    "  }",
    "  next();",
    "}"
  ].join("\n");
}
