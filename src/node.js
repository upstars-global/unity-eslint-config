import nodePlugin from "eslint-plugin-n";

import base from "./base.js";

export default [
    ...base,
    nodePlugin.configs["flat/recommended-module"],
    {
        rules: {
            "n/no-missing-import": "off",
            "n/no-process-exit": "off",
            "n/no-unpublished-import": "off",
            "n/no-unsupported-features/node-builtins": [
                "error",
                {
                    version: ">=22.22.0",
                },
            ],
        },
    },
];
