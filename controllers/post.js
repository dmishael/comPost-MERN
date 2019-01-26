const Post = require('../models/Post')


const postController = {
    index: (req, res) => {
        Post.find({})
            .then((posts) => {
                res.send(posts)
            })
        }
    }


module.exports = postController