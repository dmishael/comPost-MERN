const User = require('../models/User')



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
        console.log(userId)
        User.findById(userId).then((user) => {
            res.send(user)

        })
    },
    update: (req, res) => {
        var userId = req.params.userId
        User.findByIdAndUpdate(userId, req.body, { new: true })
            .then((newUser) => {
                newUser.save()
                res.send(newUser)
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
