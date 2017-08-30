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

router.get('/albums/:albumID', (request, response) => {
  const albumID = request.params.albumID

  dbAlbums.getAlbumsByID(albumID).then((albums) => {
    const album = albums[0]
    response.render('album', {album})
  })
    .catch((error) => {
      response.status(500).render('error', {error})
    })
})

module.exports = router
