const User = require('../models/userModel')
const {NotFoundError} = require("../helper/exceptions/notFoundError")
const Car = require('../models/carModel')
const {isString} = require("../helper/isString");
const {BadRequestError} = require("../helper/exceptions/badRequestError");


async function getUserById(id){
    if(isString(id)) {
        throw new BadRequestError()
    }

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

    const {password, ...data} = user.toJSON()

    return data
}



async function getUserByUsername(username) {
    if(!isString(username)) {
        throw new BadRequestError()
    }

    const user = await User.findOne({
        attributes: ['id','username', 'email'],
        where: {
            username:username
        },
        include: Car
    })

    if(!user) {
        throw new NotFoundError(`User by username ${username} not found`)
    }

    return user
}

async function getAllUsers() {
    return await User.findAll({
        attributes: ['id', 'username', 'email']
    })
}


module.exports = { getUserById, getUserByUsername, getAllUsers }
