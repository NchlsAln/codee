"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextjsAppRouterTemplate = nextjsAppRouterTemplate;
function nextjsAppRouterTemplate() {
  return [
    "// app/page.tsx",
    "export default function Page() {",
    "  return <h1>Hello</h1>;",
    "}",
    "",
    "// app/api/health/route.ts",
    "export async function GET() {",
    "  return Response.json({ ok: true });",
    "}",
    "",
    "// app/layout.tsx (streaming)",
    "export default function RootLayout({ children }: { children: React.ReactNode }) {",
    "  return <html><body>{children}</body></html>;",
    "}",
  ].join("\n");
}
