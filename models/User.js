const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    amountComposted: Number,
    routesHauled: Number,
    availableCredit: Number,
    name: String,
    address: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

module.exports = mongoose.model('User', User)
