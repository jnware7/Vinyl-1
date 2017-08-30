const router = require('express').Router()
const albums = require('./albums')
const auth = require('./auth')
const users = require('./users')
const {isLoggedIn} = require('../middlewares')

router.use('/', auth)
router.use(isLoggedIn)
router.use('/', albums)
router.use('/', users)

module.exports = router
