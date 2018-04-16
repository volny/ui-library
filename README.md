# Diakrit User Inferface Components library

The project is implemented as a monorepo using [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). All dependencies for the library and it's documentation are installed with a single `yarn` command. Running `yarn start` will spin up a `webpack-dev-server` with the documentation and watch for changes to the library code.

## Goals

- a comprehensive testing suite built-in from the start
- documentation including a complete API reference and live component demo
- replace the `SASS` dependency that is responsible for a lot of our compile-time issues
- reusability by removing the dependency on backend-supplied values via loading-screen
- improved development speed and experience by using `webpack-dev-server` with live hot-reloading
- consistent code style and as-you-type bug caching via `eslint` and `prettier`
- refactoring into more modular components with a simple internal dependency graph

## Installation

- run `yarn` at the project root
- `yarn start`

## Usage

The library has `peer-dependencies` of

- `"prop-types": "^15.6.1"`
- `"react": "^15.4.1 || ^16.2.0"`
- `"react-dom": "^15.4.1 || ^16.2.0"`

so make sure that's satisfied before importing. Other than that the components make no assumptions
about the environment they run in.

- add the dependency: `yarn add ui-library`
- import the component you need: `import { Text } from 'ui-library'`
- use it: `const Greeting = () => <Text bold>Hello!</Text>`

## Setting up you development environment

This project uses [Eslint](https://github.com/eslint/eslint) and [Prettier](https://github.com/prettier/prettier) for code linting and formatting.

Don't install/run `eslint`, `prettier`, or any of their dependencies globally. Instead it is added as a dev-dependency on the project.

### Run from your editor

Plugins are available for all major editors, for example for VS-Code you would install this [Eslint plugin ](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

You can set up your editor to lint and fix your code as-you-type, on save, or on command only, which
is a matter of personal preference. Example config for VS-Code:

```javascript
// enable formatting on save
"editor.formatOnSave": true,
// disable default JavaScript formatter
"javascript.format.enable": false,
// Use 'prettier-eslint'
"prettier.eslintIntegration": true
```

Example of as-you-type code linting:

![Eslint Editor Plugin Example](https://i.imgur.com/KPSEePu.gif)

### Run from command line

You can lint code on demand by running `yarn run lint:js` and `yarn run lint:css`. This will ensure
we run the version and configuration specified in `dev-dependencies` rather than what you might have
installed globally on your system. Please ensure the those commands pass before committing your code.

You can also attempt auto-format the code by running `yarn run format`. This runs `prettier --write` over the codebase, which can fix many non-ambiguous errors automatically.

## Development

After running `yarn start` you can make changes to the documentation and components, and see the changes reflected live in the documentation.

- clone the repo
- work from a new branch called `feature/xxx` or `fix/xxx`
- make sure `yarn run lint:js` and `yarn run lint:css` pass before committing your changes
- make sure the tests still pass (`yarn run test`). If you change or add new functionality please update and add test cases too!
- commit your work with a descriptive commit message mentioning the issue and component affected e.g. `[BUG-15321] Button: Add custom onClick handler`
- open a pull request to the master branch


