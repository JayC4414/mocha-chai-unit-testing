const mongoose = require('mongoose');

var saleSchema = mongoose.Schema({

    nameClient: {
        type: String
    },
    medicaPrescription: {
        type: String
    },
    age: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Saleinfo",saleSchema);