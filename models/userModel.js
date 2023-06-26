const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    picture: {type: Buffer},
    role: {type: String, default:"user"}
});

module.exports = mongoose.model('users', userSchema);