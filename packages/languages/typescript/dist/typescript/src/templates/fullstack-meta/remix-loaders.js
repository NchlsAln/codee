"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remixLoadersTemplate = remixLoadersTemplate;
function remixLoadersTemplate() {
  return [
    "import { json, type LoaderFunctionArgs } from '@remix-run/node';",
    "import { useLoaderData } from '@remix-run/react';",
    "",
    "export async function loader({ request }: LoaderFunctionArgs) {",
    "  return json({ ok: true });",
    "}",
    "",
    "export default function Route() {",
    "  const data = useLoaderData<typeof loader>();",
    "  return <pre>{JSON.stringify(data)}</pre>;",
    "}",
  ].join("\n");
}
