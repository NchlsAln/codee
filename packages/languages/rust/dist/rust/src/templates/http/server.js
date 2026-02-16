"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "use hyper::{Body, Request, Response, Server};",
        "use hyper::service::{make_service_fn, service_fn};",
        "",
        "async fn handler(_req: Request<Body>) -> Result<Response<Body>, hyper::Error> {",
        "    Ok(Response::new(Body::from(\"ok\")))",
        "}",
        "",
        "let make_svc = make_service_fn(|_| async { Ok::<_, hyper::Error>(service_fn(handler)) });",
        "let addr = ([0, 0, 0, 0], 8080).into();",
        "Server::bind(&addr).serve(make_svc).await?;"
    ].join("\n");
}
