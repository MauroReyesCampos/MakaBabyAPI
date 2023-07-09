const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    personalId: {type: String},
    adress1: {type: String},
    adress2: {type: String},
    neighborhood: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    phone: {type: String, required: true},
    obs: {type: String}
});

module.exports = mongoose.model('clients', clientSchema);