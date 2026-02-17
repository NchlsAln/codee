export function yewFrontendTemplate(): string {
  return [
    "use yew::prelude::*;",
    "",
    "#[function_component(App)]",
    "fn app() -> Html {",
    '    html! { <h1>{"Hello Yew"}</h1> }',
    "}",
  ].join("\n");
}
