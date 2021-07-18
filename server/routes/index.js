const imageRouter = require('./imageRouter')
const Router = require('express')
const router =  new Router()

router.use('/image',imageRouter)


module.exports = router