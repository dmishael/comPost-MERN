const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Booking = new Schema({
    amountCommitted: Number
})

module.exports = mongoose.model('Booking', Booking)
 