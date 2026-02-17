export function hyperHttpTemplate(): string {
  return [
    "use hyper::{Body, Request, Response, Server};",
    "use hyper::service::{make_service_fn, service_fn};",
    "",
    "async fn handle(_req: Request<Body>) -> Result<Response<Body>, hyper::Error> {",
    '    Ok(Response::new(Body::from("ok")))',
    "}",
    "",
    "#[tokio::main]",
    "async fn main() -> Result<(), Box<dyn std::error::Error>> {",
    "    let addr = ([127, 0, 0, 1], 3000).into();",
    "    let make_svc = make_service_fn(|_| async { Ok::<_, hyper::Error>(service_fn(handle)) });",
    "    Server::bind(&addr).serve(make_svc).await?;",
    "    Ok(())",
    "}",
  ].join("\n");
}
