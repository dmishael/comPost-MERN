const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Post = new Schema({
    gallonsNeeded: Number,
    // favorPoints: Number,
    // booked: String,
    composter: String,
    pickupDate: String,
    bookings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
})

module.exports = mongoose.model('Post', Post)
