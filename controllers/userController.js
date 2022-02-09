const { getUserById, getAllUsers} = require('../services/userService')
const {create} = require("./carController");

async function getUser(username){

    try {
        const user = await getUserById(username)

        const {password, ...data} = user

        return { data }

    }catch (e) {
        return e
    }
}

async function getUsers() {
    return await getAllUsers()
}

module.exports = { getUser, getUsers }
