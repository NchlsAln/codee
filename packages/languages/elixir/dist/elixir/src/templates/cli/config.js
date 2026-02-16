"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "config = Application.get_env(:my_app, :setting, :default)",
        "IO.inspect(config)"
    ].join("\n");
}
