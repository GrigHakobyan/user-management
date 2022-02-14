const { loginByUsername, registerUser } = require("../services/authService");
const {tokenGenerator} = require("../helper/tokenGenerator");
const {BadRequestError} = require("../helper/exceptions/badRequestError");


async function login({ username, password }) {

    if (!username.trim() || !password.trim()){
        throw new BadRequestError("User data not valid")
    }

    const user = await loginByUsername(username, password)

    const { password: pass, ...data } = user

    const token = await tokenGenerator(data, '1h')

    return { ...token, ...data }
}

async function registration({ username, password, email }) {
    if (!username.trim() || !password.trim() || !email.trim()){
        throw new BadRequestError("User data not valid")
    }

    const payload = {
        username,
        email
    }

    await registerUser({username, password, email})

    const token = await tokenGenerator(payload, '1h')

    return { ...token, username, email }
}

module.exports = { login, registration }
