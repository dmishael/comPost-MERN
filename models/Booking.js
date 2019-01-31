const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Booking = new Schema({
    userName: String
})

module.exports = mongoose.model('Booking', Booking)
 