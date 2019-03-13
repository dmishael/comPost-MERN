const User = require('../models/User')
const Post = require('../models/Post')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((user) => { 
                res.send(user)
            })
    },
    
    show: (req, res) => {
        const userId = req.params.userId
        // console.log(userId)
        User.findById(userId).populate('posts').then((user) => {
            res.send(user)
        })
    },
    update: (req, res) => {
        const userId = req.params.userId
        console.log(req.body)
        User.findByIdAndUpdate(userId, req.body, { new: true })
            .then((updatedUser) => {console.log(updatedUser)
                updatedUser.save()
                res.send(updatedUser)
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    }
}


module.exports = userController
