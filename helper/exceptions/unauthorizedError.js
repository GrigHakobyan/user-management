class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized') {
        super(message)
        this.statusCode = 401
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

module.exports = { UnauthorizedError }
