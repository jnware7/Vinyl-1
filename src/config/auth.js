const passport = require('passport')
const LocalStrategy = require('passport-local')
const DbUsers = require('../db/users')

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
  session: true,
},
(request, email, password, done) => {
  return DbUsers.checkUserByEmail(email).then((user) => {
    if (!user[0]) {
      return done(null, false)
    }
    if (password === user[0].password) {
      return done(null, user[0])
    }
    return done(null, false)
  })
    .catch(error => error)
}))

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  DbUsers.getUserById(id)
    .then((user) => {
      done(null, user[0])
    })
})

module.exports = passport
