"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vueCompositionTemplate = vueCompositionTemplate;
function vueCompositionTemplate() {
  return [
    '<script setup lang="ts">',
    "import { computed, ref } from 'vue';",
    "",
    "const count = ref(0);",
    "const double = computed(() => count.value * 2);",
    "function inc() { count.value += 1; }",
    "</script>",
    "",
    "<template>",
    '  <button @click="inc">{{ double }}</button>',
    "</template>",
  ].join("\n");
}
