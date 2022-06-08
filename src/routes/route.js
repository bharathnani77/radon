const express = require('express');
const router = express.Router();
const bookModel = require("../models/bookModel")
const bookController = require("../controllers/bookController")
const mongoose = require('mongoose')


router.get("/books", function (req, res) {
    res.send("books collection apis!")
})

router.get("/createBook", bookController.createBook)
router.get("/bookList", bookController.bookList)
router.post("/getBooksInYear", bookController.getBooksInYear)
router.get("/createBook", bookController.createBook )
router.get("/getParticularBooks", bookController.getparticularBooks)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)
router.get("/getUsersData", bookController.getUsersData)

module.exports = router;