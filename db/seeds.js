const User = require('../models/User')
const Post = require('../models/Post')
const Booking = require('../models/Booking')

const mongoose = require('./connections')

const book1 = new Booking({
    amountCommitted: 20
})

const book2 = new Booking({
    amountCommitted: 10
})

const post1 = new Post({
    gallonsNeeded: 10,
    composter: '799 Virginia Circle NE',
    pickupDate: "January 26, 2019",
    bookings: [book1, book2]
})

const post2 = new Post({
    gallonsNeeded: 7,
    composter: '750 Virginia Circle NE',
    pickupDate: "January 28, 2019",
    bookings: [book1, book2]
})

const user = new User({
    totalComposted: [],
    name: "Wylde Center",
    address: "435 Oakview Road",
    posts: [post1, post2]
})


User.remove({})
    .then(() => Post.remove({}))
    .then(() => Booking.remove({}))
    .then(() => Booking.insertMany([book1, book2]))
    .then(() => Post.insertMany([post1, post2]))
    .then(() => post1.save())
    .then(() => post2.save())
    .then(() => user.save())
    .then(() => console.log(user))
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())