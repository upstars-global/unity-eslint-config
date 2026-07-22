import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: [ "coverage/**", "dist/**", "node_modules/**" ],
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.node,
            sourceType: "module",
        },
    },
];
