const express = require('express');
const router = express.Router();


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/test-me1", function (req, res) {
    res.send("Hello!")
})
router.get("/test-me2", function (req, res) {
    res.send("Hey this is my third api")
})
router.get("/middleWare", function (req, res) {
    res.send("Hello World")
})




module.exports = router;