# example-github-package-smallephant

Example library published to GitHub Packages.

## Install

```shell
npm install @smallephant/example-github-package-smallephant
```

## Usage

```js
const { add, subtract } = require('@smallephant/example-github-package-smallephant');

console.log(add(5, 2));
console.log(subtract(10, 4));
```

## Contributing

1. Make code changes in a feature branch
1. Create a PR against the `main` branch
1. Once PR is approved, version according to [semver](https://semver.org/) via `npm version <major|minor|patch>`
1. Push version update
1. Merge PR

The merge will trigger a workflow to automatically publish to GitHub Packages.

TODO: Remove manual process of versioning

