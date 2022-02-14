const Router = require('koa-router')

const {
    create,
    update,
    remove,
    getAll,
    getOneByName,
    getOneById,
    getAllByName
} = require("../controllers/carController");
const {authMiddleware} = require("../middlewares/authMiddleware");

const router = new Router()

router.post('/car/create',authMiddleware, async (ctx) => {
    const newCar = ctx.request.body.car
    const username = ctx.state.user.username

    return create(username, newCar)
})


router.put('/car',authMiddleware, async (ctx) => {
    const newCar = ctx.request.body.car
    const username = ctx.state.user.username
    const carId = ctx.request.body.carId

    return update(username, carId, newCar)
})

router.delete('/car/:carId', authMiddleware,async (ctx) => {
    const carId = ctx.params.carId
    const username = ctx.state.user.username

    return remove(username, carId)
})

router.get('/cars', authMiddleware,async () => {
    return getAll()
})

router.get('/car/:id', authMiddleware,async (ctx) => {
    const id = ctx.params.id

    return getOneById(id)
})

router.post('/car', authMiddleware, async (ctx) => {
    const carName = ctx.request.body.carname

    return getOneByName(carName)
})

router.get('/car/user/:username', authMiddleware,async (ctx) => {
    const username = ctx.params.username

    return getAllByName(username)
})


module.exports = router
