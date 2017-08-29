const db = require('../../db/albums')
const router = require('express').Router()

router.get('/', (requst, response) => {

  db.getAlbums().then((albums) => {
    response.render('index', {albums})
  })
})

router.get('/albums/:albumID', (request, response) => {
  const albumID = request.params.albumID

  db.getAlbumsByID(albumID).then((albums) => {
    const album = albums[0]
    response.render('album', {album})
  })
    .catch((error) => {
      response.status(500).render('error', {error})
    })
})

module.exports = router
