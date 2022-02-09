const jwt = require('jsonwebtoken')
const {UnauthorizedError} = require("../helper/exceptions/unauthorizedError");

async function userMiddleware(ctx, next) {
    if(ctx.state.token){

        try {
            const user = jwt.verify(ctx.state.token, process.env.SECRET_KEY)

            ctx.state.user = user.payload

        } catch (e){
            ctx.body = new UnauthorizedError()
        }

    }

    await next()
}

module.exports = { userMiddleware }
