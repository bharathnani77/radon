let axios = require("axios")

let londonTemp = async function (req, res) {
    try{
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=7abe7e3c704f55c88ddde003bc29b7b3`
        }
        let result = await axios(options) 
        let data= result.data.main.temp
        res.status(200).send({msg:"London Temperature is :", temp:data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"];
        let cityObjArray = [];
        for(let i = 0;i<cities.length;i++){
            let obj = {city:cities[i]}
            let options = {
                method:'get',
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7abe7e3c704f55c88ddde003bc29b7b3`
        };
        let result = await axios(options); 
        obj.temp = result.data.main.temp
        cityObjArray.push(obj)
    }
    let sorted = cityObjArray.sort(function (a,b){return a.temp-b.temp})
    res.status(200).send({data:sorted})
}
catch(err){
    console.log(err)
    res.status(500).send({msg:err.message})
}
}


module.exports.londonTemp = londonTemp
module.exports.getSortedCities = getSortedCities