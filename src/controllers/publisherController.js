const publisherModel = require('../models/publisherModel')

const createPublisher = async function(req,res){
    let publishData = req.body
    let savedData = await publisherModel.create(publishData)
    res.send({msg:savedData})
}

module.exports.createPublisher = createPublisher