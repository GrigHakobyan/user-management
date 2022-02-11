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

const router = new Router()

router.post('/car/create', async (ctx) => {
    const newCar = ctx.request.body.car
    const username = ctx.state.user.username

    return create(username, newCar)
})


router.put('/car', async (ctx) => {
    const newCar = ctx.request.body.car
    const username = ctx.state.user.username
    const carId = ctx.request.body.carId

    return update(username, carId, newCar)
})

router.delete('/car/:carId', async (ctx) => {
    const carId = ctx.params.carId
    const username = ctx.state.user.username

    return remove(username, carId)
})

router.get('/cars', async () => {
    return getAll()
})

router.get('/car/:id', async (ctx) => {
    const id = ctx.params.id

    return getOneById(id)
})

router.post('/car', async (ctx) => {
    const carName = ctx.request.body.carname

    return getOneByName(carName)
})

router.get('/car/user/:username', async (ctx) => {
    const username = ctx.params.username

    return getAllByName(username)
})


module.exports = router
