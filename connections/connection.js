const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connection succesful");
    }
    catch(err) {
        console.log("Database connection failed ", err);
    }
}