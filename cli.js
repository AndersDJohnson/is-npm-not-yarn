#!/usr/bin/env node

var isNpmNotYarn = require('.')

if (!isNpmNotYarn) process.exit(1)
