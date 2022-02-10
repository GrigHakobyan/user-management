class BadRequestError extends Error {
    constructor(message) {
        super()
        this.message = message || 'Bad request'
        this.statusCode = 400
    }

    getStatusCode() {
        return this.statusCode
    }

    setStatusCode(statusCode) {
        this.statusCode = statusCode
    }

    getMessage() {
        return this.message
    }

    setMessage(message) {
        this.message = message
    }
}

module.exports = { BadRequestError }
