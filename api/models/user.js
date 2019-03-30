const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    }
})

const User = mongoose.model('user', userSchema);

module.exports.User = User
 

