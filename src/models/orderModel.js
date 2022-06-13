const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"User13"
    },
    productId:{
        type:ObjectId,
        ref:"product"
    },
    amount:Number,
    isFreeAppUser:{
        type:Boolean,
        requried:true
    },
    date:String
},{timestamps:true});

module.exports = mongoose.model('order', orderSchema)