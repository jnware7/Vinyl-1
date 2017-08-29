const db = require('../../db/users')
const router = require('express').Router()
const passport = require('../../config/auth')

router.route('/sign-in')
  .get((request, response) => {
    response.render('signin')
  })
  .post((request, response, next) => {
    passport.authenticate('local', (error, user) => {
      if (error) { return next(error) }
      if (!user) {
        response.render('signin', {
          message: 'Email or password does not exist.',
        })
      }
      request.logIn(user, () => {
        if (error) { return next(error) }
        return response.redirect(`/profile/${user.id}`)
      })
    })(request, response, next)
  })

router.route('/sign-up')
  .get((request, response) => {
    response.render('signup')
  })
  .post((request, response, next) => {
    const {name, email, password} = request.body
    db.createUser(name, email, password).then((newUser) => {
      if (newUser.name === 'error') {
        response.render('signup')
      } else {
        passport.authenticate('local', (error, user) => {
          if (error) { return next(error) }
          request.logIn(user, () => {
            if (error) { return next(error) }
            return response.redirect(`/profile/${user.id}`)
          })
        })(request, response, next)
      }
    })
  })

router.get('/logout', (request, response) => {
  request.session.destroy(() => {
    response.redirect('/')
  })
})

module.exports = router
