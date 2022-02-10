const User = require('../models/userModel')
const {NotFoundError} = require("../helper/exceptions/notFoundError")
const Car = require('../models/carModel')


async function getUserById(id){

    const user = await User.findOne({
        attributes: ['id', 'username', 'email'],
        where: {
            id: id
        },
        include: Car
    })


    if(!user) {
        throw new NotFoundError(`User by id ${id} not found`)
    }

    return user.toJSON()
}



async function getUserByUsername(username) {
    const user = await User.findOne({
        attributes: ['id','username', 'email'],
        where: {
            username:username
        },
        include: Car
    })

    return user.toJSON()
}

async function getAllUsers() {
    const users = await User.findAll({
        attributes: ['id', 'username', 'email']
    })

    return users
}


module.exports = { getUserById, getUserByUsername, getAllUsers }
