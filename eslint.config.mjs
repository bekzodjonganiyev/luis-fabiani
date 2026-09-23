import unicorn from "eslint-plugin-unicorn"
import prettier from "eslint-config-prettier"
import pluginImport from "eslint-plugin-import"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(prettier, {
  plugins: { unicorn, pluginImport },
  rules: {
    "import/order": "error",
    "vue/attributes-order": "error",
    "vue/require-default-prop": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
    "unicorn/prevent-abbreviations": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "unicorn/filename-case": ["error", { case: "kebabCase" }]
  }
}).append({
  ignores: [".nitro", ".nuxt", ".output", "node_modules", "public", "tokens"]
})
