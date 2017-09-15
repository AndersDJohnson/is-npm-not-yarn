var nex = process.env.npm_execpath
module.exports = !!(nex && /node_modules\/npm/.test(nex))

