const db = require('../../db/reviews')
const router = require('express').Router()

router.get('/delete/:reviewId', (request, response) => {
  const reviewId = request.params.reviewId
  const user = request.user

  db.deleteReviewByReviewId(reviewId).then(() => {
    response.redirect(`/profile/${user.id}`)
  })
})

module.exports = router
