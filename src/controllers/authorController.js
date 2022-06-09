const authorModel= require("../models/authorModel")

const createauthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createauthor= createauthor