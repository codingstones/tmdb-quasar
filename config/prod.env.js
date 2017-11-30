const secrets = require ('./secrets')

module.exports = {
  NODE_ENV: '"production"',
  API_KEY: secrets.SECRET_API_KEY
}
