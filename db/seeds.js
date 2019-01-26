const User = require('../models/User')
const Post = require('../models/Post')
// const Booking = require('../models/Booking')

const mongoose = require('./connections')



const post1 = new Post({
    dollarPrice: 10,
    favorPoints: 5,
    booked: "Yes",
    pickupLocation: '799 Virginia Circle NE',
    pickupDate: "January 26, 2019",
    bookings: []
})

const post2 = new Post({
    dollarPrice: 7,
    favorPoints: 4,
    booked: "Yes",
    pickupLocation: '750 Virginia Circle NE',
    pickupDate: "January 28, 2019",
    bookings: []
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
    .then(() => Post.insertMany([post1, post2]))
    .then(() => user.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())