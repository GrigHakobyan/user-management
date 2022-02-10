const {UnauthorizedError} = require("../helper/exceptions/unauthorizedError");
const jwt = require("jsonwebtoken");

async function authMiddleware (ctx, next) {
    if(ctx.request.method === 'OPTIONS') {
        await next()
    } else {

        try {
            if(ctx.headers.authorization) {
                const token = ctx.headers.authorization.split(' ')[1]

                const user = await jwt.verify(token, process.env.SECRET_KEY)

                if(!user.payload) {
                    throw new UnauthorizedError()
                }

                ctx.state.token = token
                ctx.state.user = user.payload

                await next()
            } else {
                throw new UnauthorizedError()
            }
        } catch (e) {
            ctx.body = e
        }
    }
}

module.exports = { authMiddleware }


