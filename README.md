# is-npm-not-yarn

> Detect if code is running as an npm script but not a yarn script.

Note: Use with `>= yarn@1` requires `>= is-npm-not-yarn@2`.

## Install

[![npm install is-npm-not-yarn (copy)](https://copyhaste.com/i?t=npm%20install%20is-npm-not-yarn)](https://copyhaste.com/c?t=npm%20install%20is-npm-not-yarn "npm install is-npm-not-yarn (copy)")
[![yarn add is-npm-not-yarn (copy)](https://copyhaste.com/i?t=yarn%20add%20is-npm-not-yarn)](https://copyhaste.com/c?t=yarn%20add%20is-npm-not-yarn "yarn add is-npm-not-yarn (copy)")

## Use

### JS
```js
var isNpmNotYarn = require('is-npm-not-yarn')
console.log(isNpmNotYarn) // true or false
```

### CLI
```
is-npm-not-yarn
```
exit code of `0` if is npm and not yarn, else `1`
