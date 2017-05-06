# is-npm-not-yarn

> Detect if code is running as an npm script but not a yarn script.

## Install
```
npm install is-npm-not-yarn
```
or
```
yarn add is-npm-not-yarn
```

## Use

### JS
```js
var isNpmNotYarn = require('is-npm-not-yarn`)
console.log(isNpmNotYarn) // true or false
```

### CLI
```
is-npm-not-yarn
```
exit code of `0` if is npm and not yarn, else `1`
