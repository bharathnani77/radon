const text = require('body-parser/lib/types/text');
const express = require('express');
const myHelper = require('../util/helper')
const myLogger = require('../logger/logger')
const myFormat = require('../validator/formatter');







const router = express.Router();

//helper.js
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getcurrentMonth()
    myHelper.getCohortData() 

    res.send('My first ever api!')
});
// logger.js
router.get('/test-me1', function (req, res) {
    console.log('Welcome to my application. I am '+myLogger.name)
    console.log('and a part of FunctionUp '+myLogger.batch)
    console.log('cohort.')
    myLogger.welcome()
    res.send('My second ever api!')

});

//formatter.js
router.get('/test-me2', function (req, res) {
   myFormat.shave()
   myFormat.lowerCase()
   myFormat.capital()
    res.send('My third api!')
});

//lodash library=> chunk method
router.get('/hello', function (req, res) {
    const xyz = require('lodash')
    let array = ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
    console.log(xyz.chunk(array,4))

    //tail method
    const abc = require('lodash')
    let x = [1,3,5,7,9,11,13,15,17,19]
    console.log(abc.tail(x))

    //union method
    const xYz = require('lodash')
    let arr = [1,5,10,4,2]
    let arr1 = [2,3,6,7,8]
    console.log(xYz.union(arr,arr1))
    res.send('My 4th api!')


//from paris method

    const aBc = require('lodash');
    let mvName = [["horror","The shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(aBc.fromPairs(mvName))
});
    




















//Write an api which gives the missing number in an array of integers starting from (1,2,3,5,6,7)

router.get('/test-me4', function (req, res) {
    let array = [1,2,3,5,6,7]

    let sum = 0; 
    for (var i in array){ 
        sum += array[i];  
    }
    let n = array.pop()
    let consecutiveSum = n*(n+1) / 2 
    let missingNumber = consecutiveSum - sum 
    
    res.send({result: missingNumber}); 
});


//Write an api which gives the missing number in an array of integers starting from anywhere....eg[33,34,35,37,38]

router.get('/sol', function (req, res) {
    let arr = [33,34,35,37,38]
    let len = arr.length 
    

    let total = 0; 
    for (var i in arr){
        total += arr[i]; 
    }

    let firstDigit = arr[0] 
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) /2 
    let missingNUmber = consecutiveSum - total 
    
    res.send({result: missingNUmber}); 
});





module.exports = router;
// adding this comment for no reason