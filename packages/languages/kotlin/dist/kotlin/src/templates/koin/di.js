"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.koinDiTemplate = koinDiTemplate;
function koinDiTemplate() {
    return [
        "import org.koin.core.context.startKoin",
        "import org.koin.dsl.module",
        "",
        "class Greeter {",
        "  fun greet() = \"hi\"",
        "}",
        "",
        "val appModule = module {",
        "  single { Greeter() }",
        "}",
        "",
        "fun main() {",
        "  startKoin { modules(appModule) }",
        "}"
    ].join("\n");
}
