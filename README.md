# unity-eslint-config

Shared ESLint flat configs for Unity projects using JavaScript, TypeScript, Vue 3, Pinia, Node.js, and Express.js.

## Requirements

- Node.js 22.22 or newer
- TypeScript 4.8.4–6.0 when linting TypeScript files

## Installation

```bash
yarn add --dev unity-eslint-config
```

When installing directly from the company Git repository, pin a release tag:

```bash
yarn add --dev github:upstars-global/unity-eslint-config#v1.0.0
```

The package includes ESLint, Prettier, and all required ESLint plugins. Consumer projects install no separate lint dependencies. TypeScript remains an application dependency and is declared as a peer dependency by this package.

## Presets

- `unity-eslint-config` contains the shared JavaScript and TypeScript rules.
- `unity-eslint-config/browser` adds browser globals.
- `unity-eslint-config/vue` adds browser globals and Vue 3 rules.
- `unity-eslint-config/node` adds Node.js rules and globals suitable for Express.js services.
- `unity-eslint-config/prettier` exports the shared Prettier options.

Pinia needs no dedicated ESLint preset; Pinia code is covered by the TypeScript and Vue presets.

## Vue application

```js
import vueConfig from "unity-eslint-config/vue";

export default [
    ...vueConfig,
    {
        ignores: [ "public/**", "tests/**" ],
        languageOptions: {
            globals: {
                DEV: "readonly",
            },
        },
    },
];
```

## Node.js or Express.js service

```js
import nodeConfig from "unity-eslint-config/node";

export default [
    ...nodeConfig,
];
```

## Commands

Add the shared Prettier options to `prettier.config.js`:

```js
export { default } from "unity-eslint-config/prettier";
```

```bash
yarn eslint .
yarn eslint . --fix
yarn prettier . --check
yarn prettier . --write
yarn tsc --noEmit
```

ESLint and TypeScript checks are intentionally separate. A consumer project keeps its TypeScript dependency for parsing linted TypeScript files and for running `tsc`, `vue-tsc`, or a TypeScript build.

## Pre-commit

Use Husky with lint-staged so commits are blocked only by ESLint errors in staged source files:

```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{js,mjs,cjs,ts,mts,cts,vue}": "eslint --fix"
  }
}
```

`.husky/pre-commit`:

```sh
yarn lint-staged
```
