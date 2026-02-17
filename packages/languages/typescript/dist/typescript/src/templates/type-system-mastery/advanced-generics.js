"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advancedGenericsTemplate = advancedGenericsTemplate;
function advancedGenericsTemplate() {
  return [
    "type Parser<T> = (input: string) => [T, string];",
    "type Map<T, U> = T extends unknown ? U : never;",
    "type HKT<F, A> = { _tag: F; _type: A };",
    "",
    "type TrimLeft<S extends string> = S extends ` ${infer R}` ? TrimLeft<R> : S;",
    "type Split<S extends string, D extends string> =",
    "  S extends `${infer H}${D}${infer T}` ? [H, ...Split<T, D>] : [S];",
  ].join("\n");
}
