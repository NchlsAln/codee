export function middlewareTemplate(): string {
  return [
    "from fastapi import FastAPI, Request",
    "",
    "app = FastAPI()",
    "",
    "@app.middleware('http')",
    "async def add_request_id(request: Request, call_next):",
    "    response = await call_next(request)",
    "    response.headers['x-request-id'] = request.headers.get('x-request-id', 'anon')",
    "    return response"
  ].join("\n");
}
