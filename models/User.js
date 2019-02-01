const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    totalComposted: [
        {
            type: Schema.Types.Number,
            ref: 'Post'
        }
    ],
    name: String,
    address: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
})

module.exports = mongoose.model('User', User)
