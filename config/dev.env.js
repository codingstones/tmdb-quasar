const secrets = require ('./secrets')

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: secrets.SECRET_API_KEY
})
