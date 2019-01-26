const User = require('../models/User')
const Post = require('../models/Post')
const Booking = require('../models/Booking')

const mongoose = require('./connections')

const book1 = new Booking({
    userName: "Daniel",
    comment: "Looking forward to it"
})

const book2 = new Booking({
    userName: "Joe",
    comment: "Not looking forward to it"
})

const post1 = new Post({
    dollarPrice: 10,
    favorPoints: 5,
    booked: "Yes",
    pickupLocation: '799 Virginia Circle NE',
    pickupDate: "January 26, 2019",
    bookings: [book1, book2]
})

const post2 = new Post({
    dollarPrice: 7,
    favorPoints: 4,
    booked: "Yes",
    pickupLocation: '750 Virginia Circle NE',
    pickupDate: "January 28, 2019",
    bookings: [book1, book2]
})

const user = new User({
    amountComposted: 100,
    routesHauled: 50,
    availableCredit: 300,
    name: "Daniel",
    address: "799 Virginia Circle NE",
    posts: [post1, post2]
})


User.remove({})
    .then(() => Post.remove({}))
    .then(() => Booking.remove({}))
    .then(() => Post.insertMany([post1, post2]))
    .then(() => Booking.insertMany([book1, book2]))
    .then(() => user.save())
    .then(() => post1.save())
    .then(() => post2.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())