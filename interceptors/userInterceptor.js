const jwt = require('jsonwebtoken')
const {HttpError} = require("../helper/httpErrors");

async function setUser(ctx, next) {
    if(ctx.state.token){

        try {
            const user = jwt.verify(ctx.state.token, process.env.SECRET_KEY)
            ctx.state.user = user

            await next()
        } catch (e){
            ctx.body = HttpError("Unauthorized", 401)
        }

    }

    await next()
}

module.exports = { setUser }
