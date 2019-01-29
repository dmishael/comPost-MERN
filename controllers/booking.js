const Booking = require('../models/Booking')
const Post = require('../models/Post')

const bookingController = {
    index: (req, res) => {
        Booking.find({})
            .then((bookings) => {
                res.send(bookings)
            })
    },
    create: (req, res) => {
        var postId = req.params.postId
        Post.findById(postId)
            .then((post) => {
                Booking.create(req.body)
                    .then((newBooking) => {
                        post.bookings.push(newBooking)
                        post.save()
                        res.send(newBooking)
                    })
            })
    },

    show: (req, res) => {
        const bookingId = req.params.bookingId
        console.log(bookingId)
        Booking.findById(bookingId).then((booking) => {
            res.send(booking)

        })
    },
    update: (req, res) => {
        var bookingId = req.params.bookingId
        Booking.findByIdAndUpdate(bookingId, req.body, { new: true })
            .then((newBooking) => {
                newBooking.save()
                res.send(newBooking)
            })
    },
    delete: (req, res) => {
        Booking.findByIdAndDelete(req.params.bookingId)
            .then(() => {
                res.send(200)
            })
    }
}


module.exports = bookingController