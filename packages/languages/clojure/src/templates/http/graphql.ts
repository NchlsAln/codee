export function httpGraphqlTemplate(): string {
  return [
    "(require '[com.walmartlabs.lacinia :as lacinia])",
    "(def schema {:queries {:ping {:type :String :resolve (fn [_ _ _] \"pong\")}}})",
    "(lacinia/execute schema \"{ ping }\" nil nil)"
  ].join("\n");
}
