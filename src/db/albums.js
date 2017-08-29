const _query = require('./index')

const getAlbums = () => _query('SELECT * FROM albums', [])

const getAlbumsByID = albumID => _query('SELECT * FROM albums WHERE id = $1', [albumID])

module.exports = {
  getAlbums,
  getAlbumsByID,
}
