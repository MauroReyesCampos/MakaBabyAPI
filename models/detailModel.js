const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    saleId: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: String, required: true},
    valor: {type: String, required: true},
    totalValor: {type: String},
    total: {type: String}
});

module.exports = mongoose.model('details', detailSchema);