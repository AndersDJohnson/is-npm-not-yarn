var slash = require('slash')
var nex = process.env.npm_execpath
module.exports = !!(nex && /node_modules\/npm/.test(slash(nex)))
