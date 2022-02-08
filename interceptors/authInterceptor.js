const {HttpError} = require("../helper/httpErrors");

async function getAuthToken (ctx, next) {
    if(ctx.headers.authorization){
        const token = ctx.headers.authorization.split(' ')[1]

        if(!token) {
            ctx.body = (HttpError("Unauthorized111", 401))
        }

        ctx.state.token = token
        await next()
    }

    await next()
}

module.exports = { getAuthToken }


