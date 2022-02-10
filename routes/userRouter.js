const Router = require('koa-router')
const { getUser, getUsers, searchUser} = require("../controllers/userController");


const router = new Router()

router.get('/search/:username', async (ctx) => {
    const username = ctx.params.username

    ctx.body = await searchUser(username)
})

router.get('/users', async (ctx) => {
    ctx.body = await getUsers()
})

router.get('/user/:id', async (ctx) => {
    const id = ctx.params.id

    ctx.body = await getUser(id)
})


module.exports = router
