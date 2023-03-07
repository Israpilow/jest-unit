const mapArrToStrings = (arr) => {
    return arr.filter((item) => typeof item === "number" && item)
    .map(String)
}

module.exports = mapArrToStrings