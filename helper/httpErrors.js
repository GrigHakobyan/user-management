module.exports.HttpError = (message= "") => {
    return {
        statusCode: 400,
        message
    }
}
