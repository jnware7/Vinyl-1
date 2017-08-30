const dbReviews = require('../../db/reviews')
const dbAlbums = require('../../db/albums')
const router = require('express').Router()

router.get('/delete/:reviewId', (request, response) => {
  const reviewId = request.params.reviewId

  dbReviews.deleteReviewByReviewId(reviewId).then(() => {
    response.redirect('back')
  })
})

router.route('/albums/:albumId/reviews/new')
  .get((request, response) => {
    const user = request.user
    const albumId = request.params.albumId

    dbAlbums.getAlbumsByID(albumId).then((album) => {
      response.render('new_review', {user, album: album[0]})
    })
  })
  .post((request, response) => {
    const user = request.user
    const {content} = request.body
    const albumId = request.params.albumId

    dbReviews.createNewAlbumReview(user.id, albumId, content).then(() => {
      response.redirect(`/albums/${albumId}`)
    })
  })

module.exports = router
