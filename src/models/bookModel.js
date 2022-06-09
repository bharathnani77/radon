const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        requrie: true
    },
    price : {
        indianPrice: String,
        europeanPrice: String
    },
    year:{
        type: Number,
        default: 2021
    },
    tags : [string],
    authorName: string,
    totalPages: Number,
    stockAvailable: Boolean
    },{ timestamps: true });

module.exports = mongoose.model('bhaBook', bookSchema) // Book=> books    
