export function xmlTemplate(): string {
  return [
    "<?php",
    "$xml = new SimpleXMLElement('<user/>');",
    "$xml->addChild('name', 'Ada');",
    "echo $xml->asXML();"
  ].join("\n");
}
