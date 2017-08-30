-- SELECT content, date_created, albums.title, users.name FROM reviews
-- JOIN albums ON album_id=albums.id
-- JOIN users ON user_id=users.id;

-- SELECT * FROM reviews WHERE user_id=1
-- ORDER BY date_created DESC;

-- SELECT date_created, content, albums.title FROM reviews
-- JOIN albums ON album_id=albums.id
-- WHERE user_id=1 ORDER BY date_created DESC;

-- DELETE FROM reviews WHERE id=6;

-- SELECT reviews.id, date_created, content, albums.title, users.name, users.id AS userid FROM reviews
-- JOIN albums ON album_id=albums.id
-- JOIN users ON user_id=users.id
-- WHERE album_id=3 ORDER BY date_created DESC;

SELECT content, date_created, albums.title, users.name, users.id AS userid, albums.id AS albumid FROM reviews
JOIN albums ON album_id=albums.id
JOIN users ON user_id=users.id
ORDER BY date_created DESC LIMIT 3;
