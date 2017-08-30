exports.up = (pgm, run) => {
  pgm.alterColumn('users', 'profile_picture', {
    default: 'maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png',
  })
  run()
}

exports.down = (pgm, run) => {
  pgm.alterColumn('users', 'profile_picture', {
    default: 'http://support.plymouth.edu/kb_images/Yammer/default.jpeg',
  })
  run()
}
