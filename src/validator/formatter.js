let text = "         functionup"
function trim(){
 return text.trim()
}
function lower(){
    return text.toLowerCase()
}
function upper(){
    return text.toUpperCase()
}

module.exports.text = text
module.exports.trim = trim
module.exports.lower = lower
moduke.exports.upper = upper