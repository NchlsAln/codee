"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return "package main\n\nimport (\n  \"fmt\"\n\n  \"github.com/spf13/viper\"\n)\n\nfunc main() {\n  viper.SetDefault(\"server.host\", \"localhost\")\n  host := viper.GetString(\"server.host\")\n  fmt.Println(host)\n}\n";
}
