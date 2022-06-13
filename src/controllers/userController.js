const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    
    let data= req.body
    let saveData = await UserModel.create(body)
    res.send({msg:saveData})
}
module.exports.createUse = createUser
