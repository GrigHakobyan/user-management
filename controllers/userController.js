const { getUserById, getAllUsers, getUserByUsername} = require('../services/userService')


async function searchUser(username) {

    try {
        const user = await getUserByUsername(username)

        const {password, ...data} = user

        return { data }

    }catch (e) {
        return e
    }
}


async function getUser(id){

    try {
        const user = await getUserById(id)

        const {password, ...data} = user

        return { data }

    }catch (e) {
        return e
    }
}

async function getUsers() {
    return await getAllUsers()
}

module.exports = { getUser, getUsers, searchUser }
