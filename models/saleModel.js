const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
    saleId: {type: String, required: true},
    client: {type: String, required: true},
    date: {type: Date, required: true}
});

module.exports = mongoose.model('sales', saleSchema);