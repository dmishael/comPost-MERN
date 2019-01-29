const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const postController = require('../controllers/post')
const bookingController = require('../controllers/booking')

router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

//done with user routes

router.get('/api/posts/:userId', postController.index)
router.post('/api/users/:userId/posts', postController.create)
router.get('/api/posts/:postId', postController.show)
router.patch('/api/posts/:postId', postController.update)
router.delete('/api/posts/:postId', postController.delete)


router.get('/api/bookings', bookingController.index)
router.post('/api/posts/:postId/bookings', bookingController.create)
router.get('/api/bookings/:bookingId', bookingController.show)
router.patch('/api/bookings/:bookingId', bookingController.update)
router.delete('/api/bookings/:bookingId', bookingController.delete)



module.exports = router