const text = require('body-parser/lib/types/text');
const express = require('express');
const myHelper = require('../util/helper')
const myLogger = require('../logger/logger')
const myFormat = require('../validator/formatter')




const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getcurrentMonth()
    myHelper.getCohortData() 

    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    console.log('Welcome to my application. I am '+myLogger.name)
    console.log('and a part of FunctionUp '+myLogger.batch)
    console.log('cohort.')
    myLogger.welcome()
    res.send('My second ever api!')

});

router.get('/test-me2', function (req, res) {
   myFormat.shave()
   myFormat.lowerCase()
   myFormat.capital()
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