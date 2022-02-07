const fakeDB = require('../helper/fakeDB')
const {HttpError} = require("../helper/httpErrors");


async function getUserById(username){
    const user = fakeDB.users.find(user => user.username === username)

    if(!user ) {
        return HttpError(`User by id ${username} not found`)
    }

    return user
}





module.exports = { getUserById }
