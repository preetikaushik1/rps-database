const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    profile: String,
    id: Number,
    class:String
})

const UserPage = mongoose.model('students', UserSchema)

module.exports = UserPage