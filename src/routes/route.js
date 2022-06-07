const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel")
const UserController= require("../controllers/userController")
const bookModel = require("../models/bookModel")
const bookController = require("../controllers/bookController")


router.get("/books", function (req, res) {
    res.send("My first books api!")
})

router.post("/createBook", bookController.createBook )

router.get("/getBooksData", bookController.getBooksData)


module.exports = router;