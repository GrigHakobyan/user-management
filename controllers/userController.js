const { getUserById } = require('../services/userService')

async function getUser(ctx){
    const username = ctx.params.username
    const user = await getUserById(username)


    const {password, ...data} = user

    ctx.body = data
}

module.exports = { getUser }
