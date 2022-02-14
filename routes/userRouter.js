const Router = require('koa-router')
const { getUser, getUsers, searchUser} = require("../controllers/userController");
const {authMiddleware} = require("../middlewares/authMiddleware");


const router = new Router()

router.get('/search/:username', authMiddleware,async (ctx) => {
    const username = ctx.params.username

    return searchUser(username)
})

router.get('/users', authMiddleware,async () => {
    return getUsers()
})

router.get('/user/:id',authMiddleware, async (ctx) => {
    const id = ctx.params.id

    return getUser(id)
})


module.exports = router
