const router = require('express').Router()
const albums = require('./albums')
const auth = require('./auth')
const users = require('./users')
const reviews = require('./reviews')
const {isLoggedIn} = require('../middlewares')

router.use('/', auth)
router.use(isLoggedIn)
router.use('/', albums)
router.use('/', users)
router.use('/', reviews)

module.exports = router
