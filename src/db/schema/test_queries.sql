-- SELECT content, date_created, albums.title, users.name FROM reviews
-- JOIN albums ON album_id=albums.id
-- JOIN users ON user_id=users.id;

-- SELECT * FROM reviews WHERE user_id=1
-- ORDER BY date_created DESC;

-- SELECT date_created, content, albums.title FROM reviews
-- JOIN albums ON album_id=albums.id
-- WHERE user_id=1 ORDER BY date_created DESC;

DELETE FROM reviews WHERE id=6;
