"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "<?php",
        "$xml = new SimpleXMLElement('<user/>');",
        "$xml->addChild('name', 'Ada');",
        "echo $xml->asXML();"
    ].join("\n");
}
