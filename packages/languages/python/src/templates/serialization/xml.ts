export function xmlTemplate(): string {
  return [
    "import xml.etree.ElementTree as ET",
    "",
    "root = ET.Element('user')",
    "root.set('id', '1')",
    "ET.SubElement(root, 'email').text = 'ada@example.com'",
    "",
    "print(ET.tostring(root, encoding='unicode'))"
  ].join("\n");
}
