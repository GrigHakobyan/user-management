const {UnauthorizedError} = require("../helper/exceptions/unauthorizedError");
const jwt = require("jsonwebtoken");

async function authMiddleware (ctx, next) {
    if(ctx.request.method === 'OPTIONS') {
        return next()
    } else {

        if(ctx.headers.authorization) {
            const token = ctx.headers.authorization.split(' ')[1]

            jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                if(err) {
                    throw new UnauthorizedError()
                }

                if(!user.payload) {
                    throw new UnauthorizedError()
                }

                ctx.state.token = token
                ctx.state.user = user.payload
            })


            ctx.state.response = await next()

        } else {
            throw new UnauthorizedError()
        }
    }
}

module.exports = { authMiddleware }


