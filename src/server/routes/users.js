const dbUsers = require('../../db/users')
const dbReviews = require('../../db/reviews')
const router = require('express').Router()

router.get('/profile/:userId', (request, response) => {
  const userId = request.params.userId

  dbUsers.getUserById(userId).then((user) => {
    dbReviews.getReviewsByUserId(userId).then((reviews) => {
      response.render('profile', {user: user[0], reviews})
    })
  })
})

module.exports = router
