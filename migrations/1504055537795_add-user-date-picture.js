exports.up = (pgm, run) => {
  pgm.addColumns('users', {
    date_joined: {type: 'timestamp', default: pgm.func('CURRENT_TIMESTAMP')},
    profile_picture: {type: 'varchar(255)', default: 'http://support.plymouth.edu/kb_images/Yammer/default.jpeg'},
  })
  run()
}

exports.down = (pgm, run) => {
  pgm.dropColumns('users', ['date_joined', 'profile_picture'])
  run()
}
