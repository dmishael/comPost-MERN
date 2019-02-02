const Post = require('../models/Post')
const User = require('../models/User')


const postController = {
    index: (req, res) => {
        Post.find({}).populate('bookings')
            .then((posts) => {
                res.send(posts)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        
        User.findById(userId)
            .then((user) => {
                
                Post.create(req.body)
                    .then((newPost) => {
                        user.posts.push(newPost)
                        user.totalComposted.push(newPost.gallonsNeeded)
                        user.save()
                        res.send(newPost)
                    })
            })
    },
    show: (req, res) => {
        const postId = req.params.postId
        Post.findById(postId).populate('bookings').then((post) => {
            res.send(post)

        })
    },
    update: (req, res) => {
        var postId = req.params.postId
        Post.findByIdAndUpdate(postId, req.body, { new: true })
            .then((newPost) => {
                newPost.save()
                res.send(newPost)
            })
    },
    delete: (req, res) => {
        var userId = req.params.userId
        console.log("user",userId)
        // var user = User.findById(userId).then((user)=> {
        //     return (user)
        // }).then(

        // console.log(user))

        console.log(userId)
        User.findById(userId).posts
        Post.findByIdAndDelete(req.params.postId).then(

        )
            .then(() => {
                res.send(200)
            })
    }
}


module.exports = postController