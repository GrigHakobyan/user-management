const { getUserById, getAllUsers, getUserByUsername} = require('../services/userService')


async function searchUser(username) {
    return getUserByUsername(username)
}


async function getUser(id){
    return getUserById(id)
}

async function getUsers() {
    return getAllUsers()
}

module.exports = { getUser, getUsers, searchUser }
