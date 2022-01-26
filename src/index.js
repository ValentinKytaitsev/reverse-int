module.exports = function reverse (n) {
    let newStr = ""
    let nStr = n.toString()
    let strLength = n.toString().length
    let k = 1
    
    if (n < 0) {
        n = n * (-1)
    }
    if (nStr.endsWith("0")) {
        nStr = nStr.slice(0, -1)
    }
    for (let i = 0; i < strLength; i++) {
        newStr += nStr.charAt(strLength - k)
        k++
    }
    return newStr
}
