const mongoose = require('mongoose')
const country = mongoose.model('country', {
    name: {
        type: String,
        required: true,
    }
}, 'country')

module.exports = country
