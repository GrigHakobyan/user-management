const {HttpError} = require("../helper/httpErrors")

const User = require('../models/userModel')


async function getUserById(username){

    const user = await User.findOne({
        attributes: ['username', 'email'],
        where: {
            username: username
        }
    })

    if(!user) {
        throw HttpError(`User by id ${username} not found`)
    }

    return user.dataValues
}



async function getUserByUsername(username) {
    const user = await User.findOne({
        attributes: ['username', 'email', 'refreshToken'],
        where: {
            username:username
        }
    })

    return user.dataValues
}

module.exports = { getUserById, getUserByUsername }
