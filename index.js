const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('@koa/cors')

require('dotenv').config()

const sequelize = require('./db')

const { getAuthToken } = require('./interceptors/authInterceptor')
const { setUser } = require('./interceptors/userInterceptor')

const PORT = process.env.PORT || 5000

const app = new Koa()

const router = require('./router')

app.use(cors())

app.use(bodyParser())

app.use(getAuthToken)
app.use(setUser)

app.use(router.routes())

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
