export function xmlTemplate(): string {
  return [
    "(require '[clojure.data.xml :as xml])",
    "(def doc (xml/element :user {} [(xml/element :name {} [\"Ada\"]) ]))",
    "(println (xml/emit-str doc))"
  ].join("\n");
}
