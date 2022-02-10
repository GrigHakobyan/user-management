const bcrypt = require('bcrypt')

const User = require('../models/userModel')
const {BadRequestError} = require("../helper/exceptions/badRequestError");

async function loginByUsername(username, password){

    const user = await User.findOne({
        attributes: ['username', 'email', 'password'],
        where: {
            username: username
        }
    })

    if(!user) {
        throw new BadRequestError(`Invalid username or password`)
    }

    const isVerified = await bcrypt.compare(password, user.dataValues.password)

    if(isVerified) {
        return user.dataValues
    }

    throw new BadRequestError()
}

async function registerUser({username, password, email}) {

    const user = await User.findOne({
        where: {
            username: username,
            email: email
        }
    })

    if(user) {
        throw new BadRequestError("User Already Exist")
    }

    const newUser = await User.create({username,email,password})

    return newUser.dataValues
}


module.exports = { loginByUsername, registerUser }
