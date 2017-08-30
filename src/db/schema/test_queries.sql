SELECT content, date_created, albums.title, users.name FROM reviews
JOIN albums ON album_id=albums.id
JOIN users ON user_id=users.id;
