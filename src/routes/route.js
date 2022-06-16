const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/users", UserController.createUser )

router.post("/login", UserController.loginUser )

router.get("/users/:userId", commonMW.authenticate, commonMW.authorise, UserController.getUserData)

router.put("/users/:userId", commonMW.authenticate, commonMW.authorise, UserController.updateUser)

router.delete("/users/:userId", commonMW.authenticate, commonMW.authorise, UserController.deleteUser)

module.exports = router;