const { getUserById } = require('../services/userService')

async function getUser(username){

    try {
        const user = await getUserById(username)

        const {password, ...data} = user

        return { data }

    }catch (e) {
        console.log(e)
        return e
    }
}

module.exports = { getUser }
