const isLoggedIn = (request, response, next) => {
  if (!request.user) {
    response.redirect('/sign-in')
  } else {
    response.locals.id = request.user.id
    response.locals.isLoggedIn = true
    next()
  }
}

module.exports = {isLoggedIn}
