const User = require('../models/User')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
        }
    }


module.exports = userController
