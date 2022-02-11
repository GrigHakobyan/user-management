const Router = require('koa-router')
const { getUser, getUsers, searchUser} = require("../controllers/userController");


const router = new Router()

router.get('/search/:username', async (ctx) => {
    const username = ctx.params.username

    return searchUser(username)
})

router.get('/users', async () => {
    return getUsers()
})

router.get('/user/:id', async (ctx) => {
    const id = ctx.params.id

    return getUser(id)
})


module.exports = router
