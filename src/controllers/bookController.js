const bookModel = require("../models/bookModel")
const UserModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    return res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await bookModel.find().select({bookName: 1,authorName: 1, _id: 0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function(req, res){
 let publishingYear = req.body.year   
 let allBooks = await bookModel.find({year: publishingYear})
 res.send({msg: allBooks})
}
const getparticularBooks= async function(req, res){
    let fetch = req.body
    let allBooks = await bookModel.find({bodyName: fetch.bodyName}, {tags: fetch.tags},{totalPages: fetch.totalPages},{year: fetch.year})
    res.send({msg: allBooks})
   }

const getXINRBooks= async function(req, res){
    let inrBooks = await bookModel.find({$or: [{"price.indianPrice" : {$eq: "100INR"}},{"price.indianPrice" : {$eq:"200INR"}},{"price.indianPrice" : {$eq:"500INR"}}]})
    res.send({msg: inrBooks})
   }
const getRandomBooks= async function(req, res){
    let allBooks = await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$eq: "500"}}]})
    res.send({msg: allBooks})
   }

   const getUsersData = async function(req,res){
       let allUsers = await bookModel.find().count()
       res.send({msg: allUsers})
    }
   

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getparticularBooks = getparticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getUsersData = getUsersData
  

