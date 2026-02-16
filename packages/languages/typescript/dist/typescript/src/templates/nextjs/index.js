"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextjsTemplate = nextjsTemplate;
function nextjsTemplate() {
    return [
        "import type { NextApiRequest, NextApiResponse } from 'next';",
        "",
        "type Response = { ok: boolean };",
        "",
        "export default function handler(_req: NextApiRequest, res: NextApiResponse<Response>) {",
        "  res.status(200).json({ ok: true });",
        "}"
    ].join("\n");
}
