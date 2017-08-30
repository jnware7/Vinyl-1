const dbAlbums = require('../../db/albums')
const dbReviews = require('../../db/reviews')
const router = require('express').Router()

router.get('/', (request, response) => {
  const user = request.user

  dbAlbums.getAlbums().then((albums) => {
    dbReviews.getRecentReviews().then((reviews) => {
      response.render('index', {albums, user, reviews})
    })
  })
})

router.get('/albums/:albumId', (request, response) => {
  const albumId = request.params.albumId
  const user = request.user

  dbAlbums.getAlbumsByID(albumId).then((albums) => {
    dbReviews.getReviewsByAlbumId(albumId).then((reviews) => {
			console.log(reviews);
      const album = albums[0]
      response.render('album', {album, user, reviews})
    })
  })
    .catch((error) => {
      response.status(500).render('error', {error})
    })
})

router.get('/albums/:albumId/reviews/new', (request, response) => {
  response.render('new_review')
})

module.exports = router
