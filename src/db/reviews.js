const _query = require('./index')

const getRecentReviews = () => _query(`SELECT content, date_created, albums.title, users.name FROM reviews
JOIN albums ON album_id=albums.id
JOIN users ON user_id=users.id
ORDER BY date_created DESC LIMIT 3`, [])

module.exports = {
  getRecentReviews,
}
