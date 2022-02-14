function isString(target) {
    const parsedValue = +target

    return Number.isNaN(parsedValue)
}

module.exports = { isString }
