## Monorepo Template using Lerna & Yarn Workspaces

> A Monorepo with multiple packages and a shared build, test, and release process.

## Content

The project now consists of 2 packages.

> Of course you can add more packages, feel free to play around with it.

-   **api**: boilerplate nodejs express with babel configured for es6+.
-   **web**: create-react-app bootstraped (latest version) + tailwindcss configured

## Tools that are used

-   [Lerna](https://lernajs.io/)  - The Monorepo manager
-   [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
-   [React](https://reactjs.org/)  -  JavaScript library for user interfaces
-   [Tailwindcss](https://tailwindcss.com/)  -  Easy to use CSS using classNames
-   [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
-   [Eslint](https://eslint.org/) - Linting Tool
-   [Prettier](https://prettier.io/) - Format Code Tool
-   [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing
-   [Commitizen](https://commitizen-tools.github.io/commitizen/) - Best commit tool

## Usage

-   `yarn dev` - To run all `start script` in `/packages`.
-   `yarn test` - Run all linting and unit tests before committing.

## Lerna

-   `yarn new-version` - Only commit conventional commits.
-   `yarn diff` - Only show differences from previous commits vs now.

## Continuous Integration / Continuous Development

Currently this template only support GitHub Action. But, you are free to add other CI/CD tools, like CircleCI, Jenkins, AWS CodePipeline, and etc...

## Todo

-   [ ] Add docker support that separate all packages into services
-   [ ] Add more CI/CD tool (Only support GitHub Action)

## Current Bug

-   None

## Template Info

### Author

Eric Zhang

### Version

1.0.0

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
