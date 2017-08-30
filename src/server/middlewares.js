const isLoggedIn = (request, response, next) => {
  if (!request.user) {
    response.redirect('/sign-in')
  } else {
    response.locals.isLoggedIn = true
    next()
  }
}

module.exports = {isLoggedIn}
