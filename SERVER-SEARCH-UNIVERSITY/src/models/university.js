const mongoose = require('mongoose')

const Univeristy = mongoose.model('University', {
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    }
})

module.exports = Univeristy