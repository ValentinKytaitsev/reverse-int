module.exports = function reverse (n) {
  let newStr = ""
    const strLength = n.toString().length
    for (let i=0; i < strLength; i++) {
        newStr += strLength - i
    }
    return newStr
}
