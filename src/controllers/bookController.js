const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let bookData = req.body
    let authorId = bookData.author_Id

    if(!authorId) 
    res.send("Author id is mandatory")

    let publishId = bookData.publisher_Id
    if(!publishId)
    res.send("Publisher id is a must!!")

    let savedAuthData = await authorModel.findById(authorId)
    if(!savedAuthData)
    res.send("Invalid author id")

    let savedPublishData = await publisherModel.findById(publishId)
    if(!savedPublishData)
    res.send("Invalid publisher id")

    let savedData = await bookModel.create(bookData)
    res.send(savedData)

}

const getAllBooks = async function (req, res) {
    let savedData = await bookModel.find().populate('author_Id','publisher_Id')
    res.send(savedData)

}

module.exports.createBook= createBook
module.exports.getAllBooks = getAllBooks