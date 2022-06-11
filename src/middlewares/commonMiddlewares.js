const midGlb = function (req,res,next){
    console.log("Hi im a global middleware");
    next()
}

const assignmentMW = function (req,res,next){
    let currentDate = new Date();
    let dateTime = currentDate.getDate() + " " + (currentDate.getMonth()+1) + " " + currentDate.getFullYear() + " "
                    + currentDate.getHours() + " " + currentDate.getMinutes() + " " + currentDate.getSeconds();

    let ip = req.ip
    let url = req.originalUrl

    console.log('${dateTime} ${ip} ${url}')

    next()
}

app.use(assignmentMW)

module.exports.midGlb= midGlb
module.exports.assignmentMW = assignmentMW


