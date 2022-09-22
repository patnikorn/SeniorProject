const dotenv = require('dotenv')

const { argv } = require('yargs')

dotenv.config({
  path: argv.env || '.env',
})

module.exports = {
  JWT_SECRET: 'secret',
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT || 3000,
  

  ERROR: {
    NO_AUTH_CODE: 401,
  },

  DATETIME_FORMAT: 'DD/MM/yyyy HH:mm:ss',

}


