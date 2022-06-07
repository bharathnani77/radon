const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        requried: true
    },
    authorName: String,
    categoryName:{
        type: String,
        enum: ["Encyclopedia","Fictional","Health and Fitness","Diary","science"]
    },
    year: Number
    },{ timestamps: true });

module.exports = mongoose.model('Book', bookSchema) // Book=> books    
