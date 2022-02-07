const Router = require('koa-router')
const {getUser} = require("./controllers/userController");
const {login, registration} = require("./controllers/authController");


const router = new Router()

router.post('/login', async (ctx) => {
    return await login()
})
router.post('/registration', registration)
router.get('/user/:username', getUser)

module.exports = router
