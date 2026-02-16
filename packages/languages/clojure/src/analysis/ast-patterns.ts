export const clojureAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\(ns\\b", description: "Namespace declaration" },
	{ pattern: "\\(defn\\s+\\w+", description: "Function definition" },
	{ pattern: "\\(def\\s+\\w+", description: "Var definition" },
	{ pattern: "\\(let\\b", description: "Lexical binding" },
	{ pattern: "\\(->>\\b|\\(->\\b", description: "Threading macros" },
	{ pattern: "\\(defprotocol\\b", description: "Protocol definition" },
	{ pattern: "\\(defmulti\\b", description: "Multimethod definition" },
	{ pattern: "\\(defmethod\\b", description: "Multimethod implementation" },
	{ pattern: "\\(go\\b", description: "core.async go block" },
	{ pattern: "\\(chan\\b", description: "core.async channel" },
	{ pattern: "\\(spec/def\\b|\\(s/def\\b", description: "Spec definition" },
	{ pattern: "\\(defrecord\\b", description: "Record definition" },
	{ pattern: "\\(reify\\b", description: "Reify usage" },
	{ pattern: "\\bprintln\\b", description: "Direct output" },
	{ pattern: "\\bslurp\\b|\\bspit\\b", description: "File IO" },
	{ pattern: "\\bread-string\\b", description: "Eval risk (review inputs)" }
];
