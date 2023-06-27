const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {type: String, required:  true},
    personalId: {type: String, required: true},
    adress1: {type: String, required: true},
    adress2: {type: String},
    neighborhood: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    phone: {type: String, required: true},
    obs: {type: String}
});

module.exports = mongoose.model('clients', clientSchema);