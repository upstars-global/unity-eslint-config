#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import process from "node:process";

const require = createRequire(import.meta.url);
const eslintPackagePath = require.resolve("eslint/package.json");
const eslintCliPath = path.join(path.dirname(eslintPackagePath), "bin", "eslint.js");
const result = spawnSync(process.execPath, [ eslintCliPath, ...process.argv.slice(2) ], {
    stdio: "inherit",
});

if (result.error) {
    throw result.error;
}

process.exitCode = result.status ?? 1;
