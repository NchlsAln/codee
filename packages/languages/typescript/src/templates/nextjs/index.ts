export function nextjsTemplate(): string {
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
