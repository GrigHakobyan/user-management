const { loginByUsername, registerUser } = require("../services/authService");
const {tokenGenerator} = require("../helper/tokenGenerator");
const {BadRequestError} = require("../helper/exceptions/badRequestError");



async function login({ username, password }) {

    if (!username.trim() || !password.trim()){
        throw new BadRequestError("User data not valid")
    }

    const user = await loginByUsername(username, password)

    const { password: pass, ...data } = user

    return tokenGenerator(data, '1h')
}

async function registration({ username, password, email }) {
    if (!username.trim() || !password.trim() || !email.trim()){
        throw new BadRequestError("User data not valid")
    }

    const payload = {
        username,
        password
    }

    await registerUser({username, password, email})

    return tokenGenerator(payload, '1h')
}

module.exports = { login, registration }
