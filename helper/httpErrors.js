module.exports.HttpError = (message= "", statusCode= 400) => {
    return {
        statusCode,
        message
    }
}
