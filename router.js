const Router = require('koa-router')
const { getUser } = require("./controllers/userController");
const { login, registration } = require("./controllers/authController");
const {tokenGenerator} = require("./helper/tokenGenerator");


const router = new Router()


router.post('/login', async (ctx) => {
    const { username, password} = ctx.request.body

    ctx.body = await login(username, password)
})
router.post('/registration', async (ctx) => {
    const userData = ctx.request.body

    ctx.body = await registration(userData)
})

router.get('/auth', (ctx) => {
    const token = tokenGenerator(ctx.state.user, '1h')
    ctx.body = {token}
})


router.get('/user/:username', async (ctx) => {

    const username = ctx.params.username

    ctx.body = await getUser(username)
})


module.exports = router
