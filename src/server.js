require('dotenv').config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('./config/auth')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000 * 30},
}))
app.use(passport.initialize())
app.use(passport.session())

app.use((request, response, next) => {
  response.locals.isLoggedIn = null
  response.locals.id = null
  response.locals.message = ''
  response.locals.moment = require('moment')
  next()
})

app.use('/', routes)

app.use((req, res) => {
  res.status(404).render('not_found')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
