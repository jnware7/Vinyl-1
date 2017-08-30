const db = require('../../db/reviews')
const router = require('express').Router()

router.get('/delete/:reviewId', (request, response) => {
  const reviewId = request.params.reviewId

  db.deleteReviewByReviewId(reviewId).then(() => {
    response.redirect('back')
  })
})

module.exports = router
