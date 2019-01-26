const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Booking = new Schema({
    userName: String,
    // comment: String
})

module.exports = mongoose.model('Booking', Booking)
