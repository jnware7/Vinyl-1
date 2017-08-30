const _query = require('./index')

const getRecentReviews = () => _query(`SELECT content, date_created, albums.title, users.name FROM reviews
JOIN albums ON album_id=albums.id
JOIN users ON user_id=users.id
ORDER BY date_created DESC LIMIT 3`, [])

const getReviewsByUserId = userId => _query(`SELECT reviews.id, date_created, content, albums.title FROM reviews
JOIN albums ON album_id=albums.id
WHERE user_id=$1 ORDER BY date_created DESC`, [userId])

const deleteReviewByReviewId = reviewId => _query('DELETE FROM reviews WHERE id=$1', [reviewId])

module.exports = {
  getRecentReviews,
  getReviewsByUserId,
  deleteReviewByReviewId,
}
