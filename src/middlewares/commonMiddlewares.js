const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    //console.log("Hi I am a middleware named Mid2")
    let isFreeAppUser = req.headers['isfreeappuser']

    if(isFreeAppUser){
        console.log(isFreeAppUser);
        if(await userModel.findById(req.body.userId)==undefined){
            res.send({msg:"userId is invalid."})
        }else{
            if(await productModel.findById(req.body.productId)==undefined){
                res.send({msg:"productId is invalid"})
            }
        }
        next()
    } 
        else{
            res.send({msg:"The request is missing a mandatory header."})
        }
}

  //const mid3= function ( req, res, next) {
    //console.log("Hi I am a middleware named Mid3")
  //  next()
//}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

//module.exports.mid1= mid1
module.exports.mid2= mid2
//module.exports.mid3= mid3
//module.exports.mid4= mid4
