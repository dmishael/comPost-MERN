// const User = require('../models/User')
const Post = require('../models/Post')
const Booking = require('../models/Booking')

const mongoose = require('./connections')

const booking1 = new Booking({
    userName: "Daniel",
    comment: "I got you fam"
})

const post = new Post({
    dollarPrice: 10,
    favorPoints: 5,
    booked: False,
    pickupLocation: '799 Virginia Circle NE',
    pickupDate: "January 26, 2019",
    bookings: [booking]
})


Post.remove({})
    .then(() => Booking.remove({}))
    .then(() => Booking.insert([booking1]))
    .then(() => post.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())