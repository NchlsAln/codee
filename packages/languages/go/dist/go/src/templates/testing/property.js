"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return "package main\n\nimport (\n  \"testing\"\n\n  \"github.com/leanovate/gopter\"\n  \"github.com/leanovate/gopter/prop\"\n)\n\nfunc TestProperty(t *testing.T) {\n  params := gopter.DefaultTestParameters()\n  props := gopter.NewProperties(params)\n  props.Property(\"commutative\", prop.ForAll(\n    func(a, b int) bool { return a+b == b+a },\n  ))\n  props.TestingRun(t)\n}\n";
}
