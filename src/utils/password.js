const bcrypt = require('bcrypt')

const saltRounds = 10

const makeHashedPassword = plainTxtPassword => bcrypt.hash(plainTxtPassword, saltRounds)


const isValidPassword = (plainTxtPassword, hash) => bcrypt.compare(plainTxtPassword, hash)


module.exports = {
  makeHashedPassword,
  isValidPassword,
}
