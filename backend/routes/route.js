const express = require('express')
const { createHandler, deleteHandler, getAllHandler, getOneHandler,updateHandler } = require('../controllers/controller')

const router = express.Router()

router.get('/:id', getOneHandler)
router.get('/', getAllHandler)
router.post('/', createHandler)
router.put('/', updateHandler)
router.delete('/', deleteHandler)

module.exports = router;