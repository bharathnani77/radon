const printDate = function(){
    let currentDate = new Date()
        console.log(currentDate)
    
}
const printMOnth = function(){
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth() + 1
    console.log("The current month is "+currentMonth)
}
const getBatchInfo = function(){
    let batchInformation = " Radon, W3D3, the topic for today is Nodejs module system"
    console.log(batchInformation)
}


module.exports.printDate = printDate
module.exports.getcurrentMonth = printMOnth
module.exports.getCohortData = getBatchInfo
