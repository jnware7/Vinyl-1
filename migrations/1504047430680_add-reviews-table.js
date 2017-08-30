exports.up = (pgm, run) => {
  pgm.createTable('reviews', {
    id: {type: 'serial'},
    user_id: {type: 'serial', references: 'users'},
    album_id: {type: 'serial', references: 'albums'},
    content: {type: 'varchar(255)', notNull: true},
    date_created: {type: 'timestamp', default: pgm.func('CURRENT_TIMESTAMP')}
  })
  run()
}

exports.down = (pgm, run) => {
  pgm.dropTable('reviews')
  run()
}
