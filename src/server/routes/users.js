const db = require('../../db/users')
const router = require('express').Router()

router.get('/profile/:userId', (request, response) => {
  const userId = request.params.userId

  db.getUserById(userId).then((user) => {
    response.render('profile', {user: user[0]})
  })
})

module.exports = router
