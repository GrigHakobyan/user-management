const Koa = require('koa')
const { Sequelize } = require('sequelize')
const bodyParser = require('koa-body')

const sequelize = new Sequelize('postgres://root:root@example.com:5432/dbname')
const app = new Koa()
const router = require('./router')

app.use(bodyParser())

app.use(router.routes())

async function start() {
    try {
        await sequelize.authenticate()

        app.listen(5000, () => {
            console.log('Server start on port 5000')
        })
    } catch (e) {
        console.log(e)
    }
}

start()
