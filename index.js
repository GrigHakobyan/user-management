const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('@koa/cors')

require('dotenv').config()

const sequelize = require('./db')

const { authMiddleware } = require('./middlewares/authMiddleware')
const {responseMiddleware} = require("./middlewares/responseMiddleware");

const PORT = process.env.PORT || 5000

const app = new Koa()

const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const carRouter = require('./routes/carRouter')

app.use(cors())

app.use(bodyParser())

app.use(responseMiddleware)

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

app.use(authMiddleware)

app.use(userRouter.routes())
app.use(carRouter.routes())

app.use(userRouter.allowedMethods())
app.use(carRouter.allowedMethods())


async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()


        app.listen(PORT, () => {
            console.log('Server start on port 5000')
        })
    } catch (e) {
        console.log(e)
    }
}

start()


module.exports = app
