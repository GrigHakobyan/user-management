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


    ctx.body = await create(username, newCar)

})


router.put('/car', async (ctx) => {
    const newCar = ctx.body.car
    const username = ctx.state.user.username
    const carId = ctx.body.carId

    ctx.body = await update(username, carId, newCar)
})

router.delete('/car', async (ctx) => {
    const carId = ctx.request.body.carId
    const username = ctx.state.user.username

    ctx.body = await remove(username, carId)
})

router.get('/cars', async (ctx) => {

    ctx.body = await getAll()
})

router.get('/car/:id', async (ctx) => {
    const id = ctx.params.id

    ctx.body = await getOneById(id)
})

router.post('/car', async (ctx) => {
    const carName = ctx.request.body.carname

    ctx.body = await getOneByName(carName)
})

router.get('/car/user/:username', async (ctx) => {
    const username = ctx.params.username

    ctx.body = await getAllByName(username)
})


module.exports = router
