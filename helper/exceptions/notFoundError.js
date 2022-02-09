class NotFoundError extends Error {
    constructor(message) {
        super()
        this.message = message || 'Bad request'
        this.statusCode = 404
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

module.exports = { NotFoundError }
