const Router  = require('koa-router')
const { login, registration } = require("../controllers/authController");
const {tokenGenerator} = require("../helper/tokenGenerator");
const {authMiddleware} = require("../middlewares/authMiddleware");

const router = new Router()


router.post('/login', async (ctx) => {
    const userData = ctx.request.body

    return login(userData)
})


router.post('/registration', async (ctx) => {
    const userData = ctx.request.body

    return registration(userData)
})


router.get('/auth', authMiddleware,async (ctx) => {
    const token = await tokenGenerator(ctx.state.user, '1h')

    return { ...token, ...ctx.state.user}
})

module.exports = router
