#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import process from "node:process";

const require = createRequire(import.meta.url);
const prettierPackagePath = require.resolve("prettier/package.json");
const prettierCliPath = path.join(path.dirname(prettierPackagePath), "bin", "prettier.cjs");
const result = spawnSync(process.execPath, [ prettierCliPath, ...process.argv.slice(2) ], {
    stdio: "inherit",
});

if (result.error) {
    throw result.error;
}

process.exitCode = result.status ?? 1;
