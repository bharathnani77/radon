const trim = function(){
let text = "functionup          "
let result = text.trim()
console.log(result)
}
const lowerCase = function(){
    let a = "FUNCTIONUP"
    let res = a.toLowerCase()
    console.log('lowerCase function:'+res)
}
const upperCase = function(){
    let b = "functionup"
    let ans = b.toUpperCase()
    console.log('upperCase function:'+ans)
}

module.exports.shave = trim
module.exports.lowerCase = lowerCase
module.exports.capital = upperCase