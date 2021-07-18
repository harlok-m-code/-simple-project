const Router = require('express')
const router = new Router()
const imageController = require('../controllers/imageController')


router.get('/',imageController.getAll)
router.post('/ins',imageController.create)
router.put('/edit/:id',imageController.edit)
router.delete('/:id',imageController.delete)

module.exports = router