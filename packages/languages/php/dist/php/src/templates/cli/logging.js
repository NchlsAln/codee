"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "<?php",
        "use Monolog\\Logger;",
        "use Monolog\\Handler\\StreamHandler;",
        "",
        "$log = new Logger('app');",
        "$log->pushHandler(new StreamHandler('php://stdout'));",
        "$log->info('started');"
    ].join("\n");
}
