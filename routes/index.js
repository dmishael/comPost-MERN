const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const postController = require('../controllers/post')

router.get('/api/users', userController.index)
router.get('/api/posts', postController.index)

module.exports = router