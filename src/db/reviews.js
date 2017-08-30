const _query = require('./index')

const getRecentReviews = () => _query(`SELECT content, date_created, albums.title, users.name, users.id AS userid, albums.id AS albumid FROM reviews
JOIN albums ON album_id=albums.id
JOIN users ON user_id=users.id
ORDER BY date_created DESC LIMIT 3`, [])

const getReviewsByUserId = userId => _query(`SELECT reviews.id, date_created, content, albums.title, albums.id AS albumid FROM reviews
JOIN albums ON album_id=albums.id
WHERE user_id=$1 ORDER BY date_created DESC`, [userId])

const deleteReviewByReviewId = reviewId => _query('DELETE FROM reviews WHERE id=$1', [reviewId])

const getReviewsByAlbumId = albumId => _query(`SELECT reviews.id, date_created, content, albums.title, users.name, users.id AS userid FROM reviews
JOIN albums ON album_id=albums.id
JOIN users ON user_id=users.id
WHERE album_id=$1 ORDER BY date_created DESC`, [albumId])

const createNewAlbumReview = (userId, albumId, content) => _query(`INSERT INTO reviews (user_id, album_id, content)
VALUES ($1, $2, $3)`, [userId, albumId, content])

module.exports = {
  getRecentReviews,
  getReviewsByUserId,
  deleteReviewByReviewId,
  getReviewsByAlbumId,
  createNewAlbumReview,
}
