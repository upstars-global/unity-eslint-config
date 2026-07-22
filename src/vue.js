import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

import browser from "./browser.js";

export default [
    ...browser,
    ...pluginVue.configs["flat/recommended"],
    eslintConfigPrettier,
    {
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        rules: {
            "vue/attribute-hyphenation": [ "error", "always" ],
            "vue/block-order": "error",
            "vue/html-self-closing": [
                "error",
                {
                    html: {
                        component: "always",
                        normal: "any",
                        void: "any",
                    },
                    math: "always",
                    svg: "always",
                },
            ],
            "vue/multi-word-component-names": "off",
            "vue/no-mutating-props": "warn",
            "vue/no-unused-components": [ "warn", { ignoreWhenBindingPresent: true } ],
            "vue/no-unused-vars": "warn",
            "vue/no-v-html": "off",
            "vue/require-default-prop": "off",
            "vue/return-in-computed-property": "warn",
        },
    },
];
