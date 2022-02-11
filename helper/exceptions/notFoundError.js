class NotFoundError extends Error {
    constructor(message = 'Not Found') {
        super(message)
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
