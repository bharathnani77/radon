const text = require('body-parser/lib/types/text');
const express = require('express');
const myHelper = require('../util/helper')




const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getcurrentMonth()
    myHelper.getCohortData()
   // console.log('Welcome to my application. I am '+externalModule.name)
    //console.log('and a part of FunctionUp '+externalModule.batch)
    //console.log('cohort.')
    //externalModule.welcome()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    console.log(externalModule.batchName + ','+ externalModule.weekDay + ', the topic for today is Nodejs module system')
    externalModule.date(day)
    externalModule.month(month.getMonth())
    externalModule.batchInfo()
    res.send('My second ever api!')

});

router.get('/test-me2', function (req, res) {
   console.log(text.trim())
   console.log(text.toLowerCase())
   console.log(text.toUpperCase())
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason