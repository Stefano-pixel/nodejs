const mongoose = require("mongoose");
const {Schema} = mongoose;

const universitySchema = new Schema({
    id: String,
    name: String,
    country: String,
    user: mongoose.ObjectId
})

module.exports = mongoose.model("University", universitySchema);