exports.up = (pgm, run) => {
  pgm.createTable('users', {
    id: {type: 'serial primary key'},
    name: {type: 'varchar(255)', notNull: true},
    email: {type: 'varchar(255)', notNull: true, unique: true},
    password: {type: 'varchar(255)', notNull: true},
  })
  run()
}

exports.down = (pgm, run) => {
  pgm.dropTable('users')
  run()
}
