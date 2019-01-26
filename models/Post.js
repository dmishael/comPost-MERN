const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema({
    dollarPrice: Number,
    favorPoints: Number,
    booked: Boolean,
    pickupLocation: String,
    pickupDate: String,
    bookings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'booking'
        }
    ]
})

module.exports = mongoose.model('Post', Post)
