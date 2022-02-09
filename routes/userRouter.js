const Router = require('koa-router')
const { getUser, getUsers} = require("../controllers/userController");
const {getUserById} = require("../services/userService");


const router = new Router()

router.get('/user/:username', async (ctx) => {

    const username = ctx.params.username

    ctx.body = await getUser(username)
})

router.get('/users', async (ctx) => {
    ctx.body = await getUsers()
})

router.get('/user/:id', async (ctx) => {
    const id = ctx.params.id

    ctx.body = await getUserById(id)
})


module.exports = router
