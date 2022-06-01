function date(){
    const d = new Date()
    let day = d.getDate()
    return day   
}
 function month(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const d = new Date()
    let name = month[d.getMonth()]
}
const batchName = "Radon"
const weekDay = "W3D3"
const batchInfo = function getBatchInfo(){
}
module.exports.batchName = batchName
module.exports.weekDay = weekDay
module.exports.batchInfo = batchInfo
module.exports.today = today
module.exports.month = month
   
