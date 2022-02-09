const {UnauthorizedError} = require("../helper/exceptions/unauthorizedError");

async function authMiddleware (ctx, next) {
    if(ctx.headers.authorization){
        const token = ctx.headers.authorization.split(' ')[1]

        if(!token) {
            ctx.body = new UnauthorizedError()
        }

        ctx.state.token = token
    }

    await next()
}

module.exports = { authMiddleware }


