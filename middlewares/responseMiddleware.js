async function responseMiddleware(ctx, next) {

    try {

        let response = await next()

        if(!response) {
            response = ctx.state.response
        }

        ctx.body = response

    } catch (e) {
        ctx. body = {
            error: {
                statusCode: e.getStatusCode(),
                message: e.getMessage()
            }
        }
    }


}


module.exports = { responseMiddleware }
