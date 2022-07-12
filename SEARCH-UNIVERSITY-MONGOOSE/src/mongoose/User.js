const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const {Schema} = mongoose;

const userSchema = Schema({
    user: String,
    email: String,
    password: String,

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id : user._id.toString()}, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

module.exports = mongoose.model("User", userSchema);