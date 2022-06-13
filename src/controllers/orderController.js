const orderModel = require('../models/orderModel')

const createOrder = async function(req,res) {
    let data = req.body
    if(!verify(data.userId)){
        return res.send("your author Object Id is not valid")
    }

    if(!verify(data.productId)){
        return res.send("Your author Object Id is not valid")
    }
}

module.exports.createOrder = createOrder