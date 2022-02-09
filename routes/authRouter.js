const Router  = require('koa-router')
const { login, registration } = require("../controllers/authController");
const {tokenGenerator} = require("../helper/tokenGenerator");


const router = new Router()

router.post('/login', async (ctx) => {
    const userData = ctx.request.body

    ctx.body = await login(userData)
})
router.post('/registration', async (ctx) => {
    const userData = ctx.request.body

    ctx.body = await registration(userData)
})

router.get('/auth', (ctx) => {
    const token = tokenGenerator(ctx.state.user, '1h')
    ctx.body = {token}
})

module.exports = router
