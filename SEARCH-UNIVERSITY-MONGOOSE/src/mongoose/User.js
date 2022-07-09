const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = Schema({
    user: String,
    email: String,
    password: String
})

module.exports = mongoose.model("User", userSchema);